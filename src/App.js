import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";

import Home from "./componentes/Home";
import Mapas from "./componentes/Mapas";
import Temperatura from "./componentes/Temperatura";

function App() {
  return (
    <div className="App">
      <h1> Rotas:</h1>

      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Mapas />} path="/mapas" />
          <Route element={<Temperatura />} path="/temperatura" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
