import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './src/utils/style/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './src/components/Header/index.jsx';
import Home from './src/pages/Home/index.jsx';
import Footer from './src/components/Footer/index.jsx';
import Logement from './src/pages/Logement/index.jsx';
import Error from './src/components/Error/index.jsx';
import Propos from './src/pages/Propos/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/opc-kasa" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/logement/*" element={<Error />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);