/*
COBA IKUTIN STRUKTUR DIA
- https://github.com/idurar/idurar-erp-crm/tree/master/frontend/public

SUSUNAN NAVIGASI
LINK : 

https://project-galley.vercel.app/
*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './layout/content';
import TryVite from './layout/TryVite';
import Iframe from './layout/Iframe';
import Preloader from './layout/PreLoader';
import CatPage from './layout/CatPage';
import Awezome from './layout/Awezome';
import JoyUI from './layout/JoyUI';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/tryvite" element={<TryVite />} />
          <Route path="/iframe" element={<Iframe />} />
          <Route path="/preloader" element={<Preloader />} />
          <Route path="/catpage" element={<CatPage />} />
          <Route path="/awezome" element={<Awezome />} />
          <Route path="/joyui" element={<JoyUI />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
