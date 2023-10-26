/*
COBA IKUTIN STRUKTUR DIA
- https://github.com/idurar/idurar-erp-crm/tree/master/frontend/public

SUSUNAN NAVIGASI
- Taru aja navigasu kek biasa
- nanti setiap projek ba
*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './layout/content';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Content />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
