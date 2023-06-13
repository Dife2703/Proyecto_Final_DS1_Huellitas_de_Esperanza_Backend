import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './componentes/Login/Login';   
import Registro from './componentes/Registro/Registro';
import main from './assets/images/main.png'
//Añadidos del backend
//import axios from "axios";
import FormularioAdopcion from './componentes/FormularioAdopcion/FormularioAdopcion';
import PerfilMascota from './componentes/PerfilMascota/PerfilMascota';
function Header() {
  return (
    <header className="App-header">
      <img src={main} alt="Logo" />
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/Login">Login2</Link>
            </li>
            <li>
              <Link to="/Registro">Registro</Link>
            </li>
            <li>
              <Link to="/PerfilMascota">Perfil Mascota</Link>
            </li>
            <li>
              <Link to="/FormularioA">Formulario Adopcion</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/PerfilMascota" element={<PerfilMascota />} />
          <Route path="/FormularioA" element={<FormularioAdopcion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;