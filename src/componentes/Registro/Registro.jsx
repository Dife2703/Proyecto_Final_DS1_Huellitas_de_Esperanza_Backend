import React,{useState} from "react";
import './Registro.scss'
import { Link, useNavigate } from 'react-router-dom';
//import huellita from '../../assets/images/huellita.png';
import perrito from '../../assets/images/perrito.png';
//añadidos
import axios from "axios";

function Registro(){
   
    const[correo, setemail]=useState('');
    const[username, setname]=useState('');
    const[password, setpwd1]=useState('');
    const[pwd2, setpwd2]=useState('');
    const[cedula, setcc]=useState('');
    const[ciudad, setciudad]=useState('');
    const[celular, settelf]=useState('');
    const[motivo, setmotivo]=useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let account = {correo ,username,password, cedula,celular, motivo, ciudad };
        /*
        let body = {
            correo: "juan@gmail.com",
            username: "juan",
            password: "12345678",
            cedula: 45643,
            celular: 7777,
            motivo: "catLover",
            ciudad: "tulua"
        }
        */
        if (account) {
            //disparar al bakend
            
            try {
                //Peticion POST
                const url = "http://localhost:3000/users"; 
                console.log(typeof body);
                const response = await axios.post(url,account);    
                //validar
                console.log('usuario registrado correcta');
                console.log(response.rows);
                //Redireccionar a la página principal
                navigate('/');
                //validamos usuario

                //console.log('account: ', account);
                //Me fui a dormir att: Jordi, continuo en la mañana (pus estara encendida la pc xd cualquier cosa si algo me llamas)
            } catch (error) {
                console.log('POR FAVOR COMPRUEBE LOS CAMPOS');
                console.error(error);
            }
        }
       
      }

    return(
        <div className="main-register">


            <div className="rigth-side">
                <div className="top-right">
                    <p className="top-right">¿Ya eres administrador? 
                    <Link id='links-sigin' to="/Login"> Inicia Sesión</Link>
                    </p>
                </div>
            
             <div className="body-right">
                    <div className="container">
                        
                        <h1 className="text">¡Gracias por querer ser parte de Huellitas de Esperanza!</h1>

                        <div className="img-class">
                           
                            <img src={perrito} id="perrito-id" alt=""  srcSet=""/>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <h5>Nombre Completo</h5>
                                <input type="text" name="Name" value={username} onChange={(e)=>{setname(e.target.value)}} id= "name"/>
                            </div>
                            <div className="input-group">
                                <h5>Correo eléctronico</h5>
                                <input type="email" name="email" value={correo} onChange={(e)=>{setemail(e.target.value)}} id= "email1"/>
                            </div>
                            <div className="input-group">
                                <h5>Contraseña</h5>
                                <input type="password" name="pwd" value={password} onChange={(e)=>{setpwd1(e.target.value)}} id= "pwd1"/>
                            </div>
                            <div className="input-group">
                                <h5>Confirmar contraseña</h5>
                                <input type="password" name="pwd" value={pwd2} onChange={(e)=>{setpwd2(e.target.value)}} id= "pwd2"/>
                            </div>
                        
                        
                            <div className="input-group">
                                <h5>CC/NIT</h5>
                                <input type="number" name="cc" value={cedula} onChange={(e)=>{setcc(e.target.value)}} id= "cc"/>
                            </div>
                            
                            <div className="input-group">
                                <h5>Ciudad</h5>
                                <input type="text" name="ciudad" value={ciudad} onChange={(e)=>{setciudad(e.target.value)}} id= "ciudad"/>
                            </div>
                            <div className="input-group">
                                <h5>Teléfono</h5>
                                <input type="number" name="telf" value={celular} onChange={(e)=>{settelf(e.target.value)}} id= "telf"/>
                            </div>
                            <div className="input-group">
                                <h5>Motivos por los que desea ser parte de la web</h5>
                                <input type="text" name="motivo" value={motivo} onChange={(e)=>{setmotivo(e.target.value)}} id= "motivo"/>
                            </div>
                                <input onClick= {handleSubmit} type="submit" id="sbtn" value="Enviar solicitud"></input>
                                <h4>Recibirás un correo eléctronico confirmando su solicitud</h4>
                        </form>
                      
                    </div>
              </div>
            </div>
        </div>
    )
}

export default Registro;