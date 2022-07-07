import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Cabecera from './Cabecera';
import Contacto from './Contacto';
import ExperienciasLaborales from './ExperienciasLaborales';
import Footer from './Footer';
import FormacionAcademica from './FormacionAcademica';
import OtrosDatosInteres from './OtrosDatosInteres';
import Presentacion from './Presentacion';
import Referencias from './Referencias';

function App() {
  return (
    <div>
        <Cabecera />

        <div className="App-container">
          <BrowserRouter>
            <Routes>
              <Route path="/presentacion" element={<Presentacion />} />
              <Route path="/formacion" element={<FormacionAcademica />} />
              <Route path="/experienciasLaborales" element={<ExperienciasLaborales />} />
              <Route path="/otrosDatos" element={<OtrosDatosInteres />} />
              <Route path="/referencias" element={<Referencias />} />
              <Route path="/contacto" element={<Contacto />} /> 
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
  );
}

export default App;
