import React from "react";
import AppRouter from "./AppRoute";
import Nav from "react-bootstrap/Nav";
import Header from "./Componentes/Header";

function Dashboard() {
  return (
    <>
    <Header></Header>
    <div>
      
      
      <main>
        <br />
        <br />
        <h1
          style={{
            textAlign: "center",
            color: "#FF9900",
            paddingTop: "2%",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
          }}
        >
          Portafolio de Tareas
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#336699",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontWeight: 600,
            fontSize: "larger"
          }}
        >
          ¡Bienvenido a la página! Aquí encontrarás información sobre los avances
          que estaremos haciendo.
        </p>
        <div style={{ textAlign: "center center" }}>
          <div className="container">
            <div className="dashboard">
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="card h-100">
                    <img
                      src="https://i.gifer.com/YSFR.gif"
                      className="card-img-top"
                      alt="Imagen 1"
                    />
                    <div className="card-img-overlay justify-content-center align-items-center text-center">
                      <h3 className="card-title text-center">API</h3>
                      <p className="card-text"></p>
                      <h4 className="card-text">Pronostico del Tiempo </h4>
                      <p id="animal-count" />
                      <p />
                      <a href="/CondicionAtmosferica" className="btn btn-success">
                        Ver Tarea
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container text-center">
          <p>© 2023 Derechos Reservados</p>
        </div>
      </footer>
      {/* Bootstrap JavaScript Libraries */}
    </div>
    </>
  );
}

export default Dashboard;
