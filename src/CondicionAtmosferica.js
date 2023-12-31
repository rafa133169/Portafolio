import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Header from "./Componentes/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function CondicionAtmosferica() {

  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
  const estadosMx = [
    {"id": 1, "name": "Aguascalientes"},
    {"id": 2, "name": "Baja California"},
    {"id": 3, "name": "Baja California Sur"},
    {"id": 4, "name": "Campeche"},
    {"id": 5, "name": "Chiapas"},
    {"id": 6, "name": "Chihuahua"},
    {"id": 7, "name": "Coahuila"},
    {"id": 8, "name": "Colima"},
    {"id": 9, "name": "Durango"},
    {"id": 10, "name": "Guanajuato"},
    {"id": 11, "name": "Guerrero"},
    {"id": 12, "name": "Hidalgo"},
    {"id": 13, "name": "Jalisco"},
    {"id": 14, "name": "México"},
    {"id": 15, "name": "Michoacán"},
    {"id": 16, "name": "Morelos"},
    {"id": 17, "name": "Nayarit"},
    {"id": 18, "name": "Nuevo León"},
    {"id": 19, "name": "Oaxaca"},
    {"id": 20, "name": "Puebla"},
    {"id": 21, "name": "Querétaro"},
    {"id": 22, "name": "Quintana Roo"},
    {"id": 23, "name": "San Luis Potosí"},
    {"id": 24, "name": "Sinaloa"},
    {"id": 25, "name": "Sonora"},
    {"id": 26, "name": "Tabasco"},
    {"id": 27, "name": "Tamaulipas"},
    {"id": 28, "name": "Tlaxcala"},
    {"id": 29, "name": "Veracruz"},
    {"id": 30, "name": "Yucatán"},
    {"id": 31, "name": "Zacatecas"}
  
  ];
  const [datos, setDatos] = useState([]);
  const [estadoActual, setEstadoActual] = useState("Quintana Roo");

  const consultarDatos = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((condicionAtm) => setDatos(condicionAtm.results));
  };

  useEffect(() => {
    consultarDatos();
  }, []);

  return (
    <>
        <Header></Header>
        <br></br><br></br>
        <br></br><br></br>
        <div className="container mx-20 w-50  p-20">
      <select
        onChange={(e) => setEstadoActual(e.target.value)}
        
      >
        <option value="">Selecciona una opción</option>
        {estadosMx.map((opcion) => (
          <option key={opcion.id} value={opcion.name}>
            {opcion.name}
          </option>
        ))}
      </select>
      {estadoActual}
    
      <h1>Estado del Tiempo</h1>
      {/* {datos.map((ciudad, index) => {
        return (
          <div>
            <p>
              {ciudad.name} - <i>{ciudad.skydescriptionlong}</i>
            </p>
          </div>
        );
      })} */}
     
        <div class="offset-2 col-11 mb-5">
                
       <div class="card-body">
         <div class="table-responsive">
      <Table striped bordered hover>
              <thead>
                <tr>
                  
                  <th>Ciudad</th>
                  <th>Clima</th>
                
                </tr>
              </thead>
              <tbody>
                {datos.map((ciudad,index) => (
                  <tr key={datos.id}>
                   
                 
                    <td>{ciudad.name}</td>
                    <td>{ciudad.skydescriptionlong}</td>
                   
                    
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
            </div>
            </div>
            </div>
    </>
  );
}

export default CondicionAtmosferica;
