import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CondicionAtmosferica from "./CondicionAtmosferica";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
           <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CondicionAtmosferica" element={<CondicionAtmosferica />} />
    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
