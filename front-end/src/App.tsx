
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/General/GeneralPage';
import Analyse_Url from './pages/HomePage/Analyse_url'
import Analyse_Fichier from './pages/Toolpage/Analyse_Folder'
import Analyse_Perf from './pages/LogPage/AnalysePerf'

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/"element={< Homepage />}/>
        <Route path="/Analyse_url"element={<Analyse_Url />}/>
        <Route path="/Analyse_fichier"element={<Analyse_Fichier />}/>
        <Route path="/analyse_perf"element={<Analyse_Perf />}/>
      </Routes>
    </Router>
  );
}

