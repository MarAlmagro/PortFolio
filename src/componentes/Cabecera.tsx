import React from 'react';
import fotoPedro from "../multimedia/fotoCaraPedroCuenca.jpg"
import fotoPaleta from "../multimedia/paletaColores.png"
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';



class Cabecera extends React.Component {




  render(): React.ReactNode {
    return (

      <div className="bg-gradient row container-xxl-1">

        {/* cabecera */}

        <div className="row">
          <div className="col-8" >
            <h1 className="text-secondary  display-4 text-left pt-5 pb-3 ps-5">Pedro Cuenca Panadero </h1>
            <h2 className="fst-italic display-6 text-left ps-5">Desarrollador Full Stack</h2>
          </div>
          <div className="col-4">
            <img src={fotoPedro} className="rounded-circle border border-4 border-secondary img-fluid float-center mt-4 me-3 mb-5"
              alt="foto cara Pedro Cuenca Panadero" width={200} height={200} />
          </div>

          {/* nav var */}

          <div className="container ms-4 mt-5 mb-5">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className=" p-4">
                <h5 className="text-secondary h4">Presentación</h5>
                <h5 className="text-secondary h4">Formación academica</h5>
                <h5 className="text-secondary h4">Experiencias laborales</h5>
                <h5 className="text-secondary h4">Otros datos de interés</h5>
                <h5 className="text-secondary h4">Referencias</h5>
              </div>
            </div>
            <nav className="navbar">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
          </div>
        </div>

















      </div>




    );
  }
}

export default Cabecera;