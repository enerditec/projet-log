import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AnalysePerf.css";

function AnalysePerf() {
  const [logs, setLogs] = useState<Log[]>([]);

  interface Log {
    _id: string;
    adresse_mac: string;
    timestamp: string;
    cpu: string;
    ram: number;
    network_sent: string;
    network_received: number;
  }

  const handleFilterClick = (mac: string) => {
    axios
      .get(`http://localhost:4001/api/logs?adresse_mac=${mac}`)
      .then((response) => setLogs(response.data))
      .catch((error) => console.error(error));
  };

  const handleResetFilter = () => {
    axios
      .get("http://localhost:4001/api/logs")
      .then((response) => setLogs(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    handleResetFilter();
  }, []);

  return (
    <div className="App">
      <header className="Header">
        <div className="Header__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 4l-8.834 16h-3.427l-3.739-6.714-2.433 4.714h-3.387l7.441-13.286h3.427l3.738 6.714 2.434-4.714h3.387z" />
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
          <li className="Sidebar__menu-item">
            <Link to="/analyse_fichier">Analyse Fichier</Link>
          </li>
          <li className="Sidebar__menu-item active">
            <Link to="/analyse_perf">Analyse Performance</Link>
          </li>
        </ul>
      </nav>
      <main style={{ textAlign: "center" }} className="Main">
        <ul className="LogList">
          <li className="LogList__item">
            <table className="log-table">
            <button onClick={handleResetFilter}>Retour</button>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Adresse Mac</th>
                  <th>timestamp</th>
                  <th>cpu</th>
                  <th>ram</th>
                  <th>network sent</th>
                  <th>network receive</th>
                  <th>Filtrer par adresse MAC</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log._id}>
                    <td>{log._id}</td>
                    <td>{log.adresse_mac}</td>
                    <td>{log.timestamp}</td>
                    <td>{log.cpu}</td>
                    <td>{log.ram}</td>
                    <td>{log.network_sent}</td>
                    <td>{log.network_received}</td>
                    <td>
                      <button
                        onClick={() => handleFilterClick(log.adresse_mac)}
                      >
                        Filtrer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default AnalysePerf;
