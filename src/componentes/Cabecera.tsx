import React from 'react';
import fotoPedro from "../multimedia/fotoCaraPedroCuenca.jpg"
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';



class Cabecera extends React.Component{

 


  render(): React.ReactNode {
    return (
    <div className="bg-gradient">
      <div className="nombreFoto  d-inline-flex justify-content-between p-3  ">
        <div className="nombreCargo me-5">
        <h1 className="text-secondary display-3 text-left pt-5 pe-1 pb-3 ps-5 me-5">Pedro Cuenca Panadero </h1>
        <h2 className="text-dark font-italic display-6 text-left ps-5">Desarrollador Full Satack</h2>
        </div>
        <div className="ms-5 me-5">
          <div>
        <img src={fotoPedro} className="miFoto rounded-circle border border-4 border-secondary  img-fluid ms-5" alt="foto cara Pedro Cuenca Panadero"
         width={300} height={300}  />
         </div>

         <div className="modal" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>


        <ul className="nav flex-column">
  <li className="nav-item">
    <a className="nav-link" href="#">Link0</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link1</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link2</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link3</a>
  </li>
</ul>




    </div>
  );
}
}

export default Cabecera;