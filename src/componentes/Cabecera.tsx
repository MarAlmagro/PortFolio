import React from 'react';
import '../css/Cabecera.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotoPedro from "../multimedia/fotoCaraPedroCuenca.jpg"


function Cabecera() {
  return (
    <div id="cajaApp">
      <div className="nombreFoto  d-inline-flex justify-content-between p-3  ">
        <div className="nombreCargo me-5">
        <h1 id="tituloPortFolio" className="display-1 text-left pt-5 pe-1 pb-3 ps-5 me-5">Pedro Cuenca Panadero </h1>
        <h2 className="font-italic display-6 text-left ps-5">Desarrollador Full Satack</h2>
        </div>
        <div className="ms-5">
          <div>
        <img src={fotoPedro} className="miFoto rounded-circle border border-4 border-secondary  img-fluid ms-5" alt="foto cara Pedro Cuenca Panadero"
         width={300} height={300}  />
         </div>
        </div>
        </div>
    </div>
  );
}

export default Cabecera;