import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files && event.target.files[0];
    setFile(uploadedFile);

    const formData = new FormData();
    //@ts-ignore
    formData.append('file', uploadedFile);

    axios.post('http://localhost:4001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      setResponse(res.data);
    }).catch((error) => {
      console.error(error);
    });
  };

  const downloadFolder = async () => {
    try {
      const response = await axios.get('http://localhost:4001/download', {
        responseType: 'blob',
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'folder.zip');
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    } catch (error) {
      console.error('Error downloading folder:', error);
    }
  };
  return (
    <div className="App">
      <header className="Header">
        <div className="Header__left">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M21 4l-8.834 16h-3.427l-3.739-6.714-2.433 4.714h-3.387l7.441-13.286h3.427l3.738 6.714 2.434-4.714h3.387z"/>
          </svg>
          <span className="Header__logo">WatchDog Data Logger</span>
        </div>
        <div className="Header__right">
          <input type="text" placeholder="Search logs..." />
          <button className="Header__button">Add Log</button>
          <div className="Header__avatar">
            <img src="https://via.placeholder.com/150x150" alt="Avatar" />
          </div>
        </div>
      </header>
      <nav className="Sidebar">
        <ul className="Sidebar__menu">
          <li className="Sidebar__menu-item">
          <Link to="/">Accueil</Link>         
          </li>
          <li className="Sidebar__menu-item">
            <Link to="/analyse_url">Analyse URL</Link>
          </li>
          <li className="Sidebar__menu-item active">
          <Link to="/analyse_fichier">Analyse Fichier</Link>
          </li>
          <li className="Sidebar__menu-item">
          <button onClick={downloadFolder}>Download Folder</button>
          </li>
          <li className="Sidebar__menu-item">
          <Link to="/analyse_perf">Analyse Performance</Link>
          </li>
        </ul>
      </nav>
      <main className="Main">
        <ul className="LogList">
        <div style={{ textAlign: 'center' }}>
          <h1>Analyses de fichiers avec VirusTotal</h1>
          <input type="file" onChange={handleFileChange} />
          {file && (
            <div>
              <p>File location: {file.name}</p>
            </div>
          )}
          {response && <p>Réponse du script: {response}</p>}
        </div>
          </ul>
        </main>
      </div>
  );
}

export default App;