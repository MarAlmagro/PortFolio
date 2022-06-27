import React from 'react';
import fotoPedro from "../multimedia/FotoPedroCuenca.jpg"
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';



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

          <div className="mt-5 mb-5">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="p-4 d-flex justify-content-center">
                <h5 className="text-secondary h4 mx-5">Presentación</h5>
                <h5 className="text-secondary h4 mx-5">Formación academica</h5>
                <h5 className="text-secondary h4 mx-5">Experiencias laborales</h5>
                <h5 className="text-secondary h4 mx-5">Otros datos de interés</h5>
                <h5 className="text-secondary h4 mx-5">Referencias</h5>
                <h5 className="text-secondary h4 mx-5">Contacto</h5>
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

         {/* meter aqui componentes desde nav */}

        {/* footer */}
<div>
  <div>
    <footer>
<div className="container-fluid row px-5 container-xxl-1">

  <div className='col-5 '>
  <div className="container row align-items-center">
    <div className="row mb-5">
    <h5 className="col-12 d-flex justify-content-center display-6">Mi Dirección</h5>
    </div>
    <div className='col-5 me-5 '>
    <h5 className="row d-flex justify-content-center text-secondary">Dirección</h5>
    <h5 className="row d-flex justify-content-center">Calle Lagartera nº106 Casa Baja</h5>
    
    </div>

    <div className='col-5 ms-5'>
    <h5 className="row d-flex justify-content-center text-secondary">Código Postal</h5>
    <h5 className="row d-flex justify-content-center">28053</h5>
    
    
    </div>

    <div className="container row my-5 align-items-center">
    <h5 className="row d-flex justify-content-center text-secondary">Población</h5>
    <h5 className="row d-flex justify-content-center">Madrid</h5>
    </div>
    </div>
  </div> 
  
  <div className="lineaFooter col-2 d-flex justify-content-center"   >
  <div className="vr"></div>
</div>


  <div className='col-5 '>
<a className="row d-flex justify-content-center" href="www.linkedin.com/in/pedro-cuenca-panadero-391892225" ><svg xmlns="http://www.w3.org/2000/svg" 
width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a>


<h5 className="row d-flex justify-content-center " ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>  628994274 </h5>


<h5 className="row d-flex justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="2" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>pedrocuencapanadero@gmail.com</h5>

  </div>

</div>




    </footer>
  </div>
</div>

      </div>




    );
  }
}

export default Cabecera;