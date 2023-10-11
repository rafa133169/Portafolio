import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavegacionLateral from "./components/Nav";


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<NavegacionLateral />} />
           
    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
