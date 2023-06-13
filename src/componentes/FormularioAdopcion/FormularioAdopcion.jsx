import React,{useState} from "react";
import './FormularioAdopcion.scss'
import { useNavigate } from 'react-router-dom';
import perrito from '../../assets/images/perrito.png';
//añadidos
import axios from "axios";

function FormularioAdopcion(){
   
    const[nombre, setnombre]=useState('');
    const[apellidos, setapellidoAdoptante]=useState('');
    const[cedula, setccAdoptante ]=useState('');
    const[fechaNacimiento, setfechaNacimientoAdoptante]=useState('');
    const[edad, setedadAdoptante ]=useState('');
    const[ciudad, setciudadAdoptante ]=useState('');
    const[direccion, setdireccionAdoptante ]=useState('');
    const[email, setcorreo]=useState('');
    const[telefono, settelefonoAdoptante]=useState('');
    const[ocupacion, setocupacionAdoptante ]=useState('');
    const[salario, setsalarioAdoptante]=useState('');
    const[tipoCasa, settipoCasaAdoptante]=useState('');
    const[masMascotas, setmasMAscotasAdoptante ]=useState('');
    const[discapacidad, setdiscapacidadAdoptante]=useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let account = {nombre, apellidos,cedula,fechaNacimiento,edad, ciudad, direccion ,email,telefono,ocupacion,salario,tipoCasa,masMascotas, discapacidad};
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
            
                <div className="body-right">
                    
                        <div className="container">
                            
                            <h1 className="text">¡Gracias por querer ser parte de Huellitas de Esperanza!</h1>
                           
                            <div className="img-class">
                            
                                <img src={perrito} id="perrito-id" alt=""  srcSet=""/>

                            </div>
                            
                            <form onSubmit={handleSubmit}>

                            <div className="input-group">
                                <h5>Nombre</h5>
                                <input type="text" name="nombre" value={nombre} onChange={(e)=>{setnombre(e.target.value)}} id= "nombre"/>
                            </div>

                            <div className="input-group">
                                <h5>Apellido</h5>
                                <input type="text" name="apellidos" value={apellidos} onChange={(e)=>{setapellidoAdoptante(e.target.value)}} id= "apellidos"/>
                            </div>

                            <div className="input-group">
                                <h5>Cédula</h5>
                                <input type="number" name="ccAdoptante" value={cedula} onChange={(e)=>{setccAdoptante(e.target.value)}} id= "ccAdoptante"/>
                            </div>

                            <div className="input-group">
                                <h5>Fecha de nacimiento</h5>
                                <input type="date" name="fechaNacimiento" value={fechaNacimiento} onChange={(e)=>{setfechaNacimientoAdoptante(e.target.value)}} id= "fechaNacimiento"/>
                            </div>

                            <div className="input-group">
                                <h5>Edad</h5>
                                <input type="number" name="edad" value={edad} onChange={(e)=>{setedadAdoptante(e.target.value)}} id= "edad"/>
                            </div>

                            <div className="input-group">
                                <h5>Ciudad</h5>
                                <input type="text" name="ciudad" value={ciudad} onChange={(e)=>{setciudadAdoptante(e.target.value)}} id= "ciudad"/>
                            </div>

                            <div className="input-group">
                                <h5>Dirección</h5>
                                <input type="direccion" name="direccionAdoptante" value={direccion} onChange={(e)=>{setdireccionAdoptante(e.target.value)}} id= "direccion"/>
                            </div>

                            <div className="input-group">
                                <h5>Correo eléctronico</h5>
                                <input type="email" name="email" value={email} onChange={(e)=>{setcorreo(e.target.value)}} id= "email"/>
                            </div>

                            <div className="input-group">
                                <h5>Teléfono</h5>
                                <input type="number" name="telefono" value={telefono} onChange={(e)=>{settelefonoAdoptante(e.target.value)}} id= "telefono"/>
                            </div>

                            <div className="input-group">
                                <h5>Ocupación</h5>
                                <input type="text" name="ocupacion" value={ocupacion} onChange={(e)=>{setocupacionAdoptante(e.target.value)}} id= "ocupacion"/>
                            </div>

                            <div className="input-group">
                                <h5>Salario mensual</h5>
                                <input type="number" name="salario" value={salario} onChange={(e)=>{setsalarioAdoptante(e.target.value)}} id= "salario"/>
                            </div>

                            <div className="input-group">
                                <h5>Tipo de casa</h5>
                                <input type="text" name="tipoCasa" value={tipoCasa} onChange={(e)=>{settipoCasaAdoptante(e.target.value)}} id= "tipoCasa"/>
                            </div>

                            <div className="input-group">
                                <h5>¿ Tiene más animales?</h5>
                                <input type="text" name="masMascotas" value={masMascotas} onChange={(e)=>{setmasMAscotasAdoptante(e.target.value)}} id= "masMascotas"/>
                            </div>

                            <div className="input-group">
                                <h5>¿ Tiene discapacidad ?</h5>
                                <input type="text" name="discapacidad" value={discapacidad} onChange={(e)=>{setdiscapacidadAdoptante(e.target.value)}} id= "discapacidad"/>
                            </div>

                        
                                <input onClick= {handleSubmit} type="submit" id="sbtn" value="Enviar solicitud de adopción"></input>
                                <h4>Recibirás un correo eléctronico confirmando su solicitud</h4>
                            </form>
                      </div>
                 </div>
             </div>
         </div>
     
        
    )
}

export default FormularioAdopcion;