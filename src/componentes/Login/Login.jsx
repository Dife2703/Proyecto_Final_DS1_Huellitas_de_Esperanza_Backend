import React, { useState } from "react";
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom';
import huellita from '../../assets/images/huellita.png'
//añadidos del backend
import axios from "axios";
const { compare } = require('../Login/helpers/handleBcrypt');


function Login() {
  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let account = { emailval, passval }
    if (account) {
      //console.log('account: ', account)
      //añadido
      let usuarioValido = false;
      let username;
      if(account){
          //disparar al backend
          try {
              const url = "http://localhost:3000/users";
              const response = await axios.get(url);
              //validar
              for (let i = 0; i < response.data.length; i++) {
                  if (response.data[i].correo === account.emailval && await compare(account.passval, response.data[i].password)) {
                      usuarioValido = true;
                      username = response.data[i].username;
                  }
                  
              }
              //validamos usuario
              if (usuarioValido) {
                  //mostrar usuario
                  console.log('el usuario ha sido logueado correctamente');
                  console.log('Bienvenido: ' + username + ' es un placer tenerle de vuelta');
                  // Redireccionar a la página principal 
                  navigate('/');
              }else{
                  console.log('usuario o contraseña invaliado');
              }
              //console.log('account: ', account);
              //Me fui a dormir att: Jordi, continuo en la mañana (pus estara encendida la pc xd cualquier cosa si algo me llamas)
          } catch (error) {
              console.error(error);
          }
      
    }
  }
  }

  return (
    <div className="main-login">
      <div className="login-container">
        <div className="left-side">
          <div className="img-class">
            <img src={huellita} id="img-id" alt="" srcSet="" />
          </div>

          <div className="welcomeNote">
            <h3>¡Bienvenido a Huellitas de Esperanza!</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email1">Correo eléctronico</label>
            <input
              className="input"
              placeholder="Ingresa tu correo"
              type="email"
              value={emailval}
              onChange={(e) => { setemailval(e.target.value) }}
              id="email1"
              name="email"
            />

            <label htmlFor="pwd1">Contraseña</label>
            <input
              className="input"
              placeholder="Ingresa tu contraseña"
              type="password"
              name="password"
              value={passval}
              onChange={(e) => { setpassval(e.target.value) }}
              id="password"
            />
            <button type="submit" id="sub_butt">Iniciar sesión</button>
          </form>

          <div onClick={handleSubmit} type="submit" className="footer">
            <h4>No eres administrador, <Link className='link' to="/Registro">envía una solicitud</Link></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;