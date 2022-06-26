import React from 'react';
import fotoPedro from "../multimedia/fotoCaraPedroCuenca.jpg"
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';



class Cabecera extends React.Component {




  render(): React.ReactNode {
    return (
      <div className="bg-gradient row container-xxl-1">

        <div className="row">
          <div className="col-8" >
              <h1 className="text-secondary  display-4 text-left pt-5 pb-3 ps-4">Pedro Cuenca Panadero </h1>
              <h2 className="fst-italic display-6 text-left ps-4">Desarrollador Full Stack</h2>
          </div>
          <div className="col-4">
              <img src={fotoPedro} className="rounded-circle border border-4 border-secondary img-fluid float-center mt-5 me-3" 
                 alt="foto cara Pedro Cuenca Panadero" width={200} height={200} />
          </div>
        </div>

        <hr className="row col-10 mt-5 m-auto placeholder-glow"/>


        <ul className="nav flex-column col-3 mt-5 ms-4">
          <li className="nav-item">
            <a className="nav-link display-4" href="#">Link0</a>
          </li>
          <li className="nav-item">
            <a className="nav-link col-3" href="#"><p className="display-6 ">Link1</p></a>
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