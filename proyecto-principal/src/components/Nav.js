import React,{useState} from 'react';

function NavegacionLateral() {
    const [opcionesVisibles, setOpcionesVisibles] = useState([]);

  // Función para alternar la visibilidad de las opciones secundarias
  const toggleOpcion = (index) => {
    if (opcionesVisibles.includes(index)) {
      // Si la opción ya está visible, la eliminamos del array
      setOpcionesVisibles(opcionesVisibles.filter((item) => item !== index));
    } else {
      // Si la opción no está visible, la agregamos al array
      setOpcionesVisibles([...opcionesVisibles, index]);
    }
  };
    
  return (
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    {/* Agregar el enlace al archivo de estilos de Tailwind CSS */}
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    {/* Agregar el enlace al archivo de la biblioteca FontAwesome */}
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      rel="stylesheet"
    />
    {/* Navegación Superior */}
    <nav className="bg-blue-500 p-4 flex items-center justify-between">
      <div>
        <h1 className="text-white text-xl font-semibold">Nombre del Proyecto bien chido</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-white">Bienvenido</span>
        <i className="fas fa-user-circle text-white text-2xl" />
      </div>
    </nav>
    {/* Navegación lateral */}
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => toggleOpcion(1)}>
              <div className="flex items-center">
                <i className="fas fa-calendar-alt mr-2" />
                <span >Agenda</span>
              </div>
              <i className={`fas ${
                  opcionesVisibles.includes(1)
                    ? "fa-chevron-up"
                    : "fa-chevron-down"
                } text-xs`}/>
            </div>
            {opcionesVisibles.includes(1) && (
            <ul className="desplegable ml-4">
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Gestion de citas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Polizas
                </a>
              </li>
            </ul>
            )}
          </li>
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <i className="fas fa-money-bill-wave mr-2" />
                <span>Contabilidad</span>
              </div>
              <i className="fas fa-chevron-down text-xs" />
            </div>
            <ul className="desplegable ml-4 hidden">
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Tratamientos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Gastos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Facturas
                </a>
              </li>
            </ul>
          </li>
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <i className="fas fa-chart-bar mr-2" />
                <span>Informes</span>
              </div>
              <i className="fas fa-chevron-down text-xs" />
            </div>
            <ul className="desplegable ml-4 hidden">
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Presupuestos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Informe médico
                </a>
              </li>
            </ul>
          </li>
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <i className="fas fa-file-alt mr-2" />
                <span>Documentación</span>
              </div>
              <i className="fas fa-chevron-down text-xs" />
            </div>
            <ul className="desplegable ml-4 hidden">
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Firmas pendientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-xs" />
                  Documentos
                </a>
              </li>
            </ul>
          </li>
          {/* Agrega más enlaces para la navegación lateral */}
        </ul>
      </nav>
    </aside>
   
    
  </>
  
    
  );
}

export default NavegacionLateral;
