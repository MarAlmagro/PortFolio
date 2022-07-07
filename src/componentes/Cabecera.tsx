import React from 'react';
import fotoPedro from "../multimedia/FotoPedroCuenca.jpg"
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import { Nav } from 'react-bootstrap';



class Cabecera extends React.Component {




  render(): React.ReactNode {
    return (

      <div className="bg-gradient row container-xxl-1">

        {/* cabecera */}

        <div>
          <div className="container-fluid row px-5">
            <div className="container-fluid row justify-content-center">
              <div className=" col-md-6 md" >
                <h1 className="text-secondary  display-3 text-left pt-5 pb-3 ps-5">Pedro Cuenca Panadero </h1>
                <h2 className="fst-italic display-6 text-left ps-5">Desarrollador Full Stack</h2>
              </div>
              <div className="col-md-3 px-5  d-flex justify-content-center">
                <img src={fotoPedro} className="rounded-circle border border-4 border-secondary img-fluid float-center mt-4 me-3 mb-5"
                  alt="foto cara Pedro Cuenca Panadero" width={250} height={250} />
              </div>
            </div>

            {/* nav var */}

            <div className="my-5">
              <div className="collapse" id="navbarToggleExternalContent">
                <div className="p-4 d-flex justify-content-center">
                  <Nav.Link href="./Presentacion" className="text-secondary  mx-5 h5">Presentación</Nav.Link>
                  <Nav.Link href="./Formacion" className="text-secondary h4 mx-5 h5">Formación academica</Nav.Link>
                  <Nav.Link href="./ExperienciasLaborales" className="text-secondary h4 mx-5 h5">Experiencias laborales</Nav.Link>
                  <Nav.Link href="./OtrosDatos" className="text-secondary h4 mx-5 h5">Otros datos de interés</Nav.Link>
                  <Nav.Link href="./Referencias" className="text-secondary h4 mx-5 h5">Referencias</Nav.Link>
                  <Nav.Link href="./Contacto" className="text-secondary h4 mx-5 h5">Contacto</Nav.Link>
                </div>
              </div>
              <nav className="navbar">
                <div className="container-fluid justify-content-center">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Cabecera;