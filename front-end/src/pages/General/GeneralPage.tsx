import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import axios from "axios";
import "./GeneralPage.css";
import { Link } from 'react-router-dom';

const cookies = new Cookies();

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

function App() {
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
          <li className="Sidebar__menu-item active">
            <a href="#">Accueil</a>
            
          </li>
          <li className="Sidebar__menu-item">
            <Link to="/analyse_url">Analyse URL</Link>
          </li>
          <li className="Sidebar__menu-item">
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
          <li className="LogList__item">
            <div className="LogList__item-header">
              <span className="LogList__item-title">Error in Component A</span>
              <span className="LogList__item-time">3 hours ago</span>
            </div>
            <div className="LogList__item-body">
              <p>An error occurred in Component A with the following message: "TypeError: Cannot read property 'foo' of undefined".</p>
              <code>at ComponentA (path/to/ComponentA.tsx:25)</code>
            </div>
          </li>
          <li className="LogList__item">
            <div className="LogList__item-header">
              <span className="LogList__item-title">Warning in Component B</span>
              <span className="LogList__item-time">5 hours ago</span>
            </div>
            <div className="LogList__item-body">
              <p>A warning occurred in Component B with the following message: "Invalid prop `foo` supplied to ComponentB. Expected a number, but got a string".</p>
              <code>at ComponentB (path/to/ComponentB.tsx:10)</code>
            </div>
          </li>
          <li className="LogList__item">
            <div className="LogList__item-header">
              <span className="LogList__item-title">Info message</span>
              <span className="LogList__item-time">3 min ago</span>
              </div>
              <div className="LogList__item-body">
                <p>This is an informational message that doesn't indicate any errors or warnings.</p>
                <code>at App (path/to/App.tsx:7)</code>
              </div>
            </li>
            <li className="LogList__item">
              <div className="LogList__item-header">
                <span className="LogList__item-title">Debug message</span>
                <span className="LogList__item-time">10 hours ago</span>
              </div>
              <div className="LogList__item-body">
                <p>This is a debug message that can help with troubleshooting and identifying issues.</p>
                <code>at App (path/to/App.tsx:7)</code>
              </div>
            </li>
          </ul>
        </main>
      </div>
    );
  }
  
export default App;