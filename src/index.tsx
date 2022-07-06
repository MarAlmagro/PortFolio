import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Cabecera from './componentes/Cabecera';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './componentes/Footer';
import Presentacion from './componentes/Presentacion';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <Cabecera />

<BrowserRouter>
<Routes>
  <Route path="./Presentacion.tsx" element={<Presentacion/>}/>
</Routes>

</BrowserRouter>
     

      <Footer />

    </div>
  </React.StrictMode>
);


reportWebVitals();
