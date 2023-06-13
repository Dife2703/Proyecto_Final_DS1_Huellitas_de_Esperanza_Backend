import React,{useState} from "react";
import './PerfilMascota.scss'
import { useNavigate } from 'react-router-dom';
import perrito from '../../assets/images/perrito.png';
//añadidos
import axios from "axios";

function PerfilMascota(){
   
    const[fotoMascota, setFotoMascota]=useState('');
    const[nombreMascota, setnombreMascota]=useState('');
    const[especieMascota, setespecieMascota]=useState('');
    const[razaMascota, setrazaMascota]=useState('');
    const[sexoMascota, setsexoMascota]=useState('');
    const[descripcionMascota, setdescripcionMascota]=useState('');
    const[vacunasMascota, setvacunasMascota]=useState('');
    const[historialMascota, sethistorialMascota]=useState('');
    const[localizacionMascota, setlocalizacionMascota]=useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let account = {fotoMascota,nombreMascota ,especieMascota,razaMascota, sexoMascota,descripcionMascota, vacunasMascota, historialMascota, localizacionMascota };
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
                            <h5>Foto</h5>
                            <input type="file" name="Foto" value={fotoMascota} onChange={(e)=>{setFotoMascota(e.target.value)}} id= "Foto"/>
                        </div>

                        <div className="input-group">
                            <h5>Nombre</h5>
                            <input type="text" name="nombre" value={nombreMascota} onChange={(e)=>{setnombreMascota(e.target.value)}} id= "nombre"/>
                        </div>

                        <div className="input-group">
                            <h5>Especie</h5>
                            <input type="text" name="especie" value={especieMascota} onChange={(e)=>{setespecieMascota(e.target.value)}} id= "especie"/>
                        </div>

                        <div className="input-group">
                            <h5>Raza</h5>
                            <input type="text" name="raza" value={razaMascota} onChange={(e)=>{setrazaMascota(e.target.value)}} id= "raza"/>
                        </div>

                        <div className="input-group">
                            <h5>Sexo</h5>
                            <input type="text" name="sexo" value={sexoMascota} onChange={(e)=>{setsexoMascota(e.target.value)}} id= "sexo"/>
                        </div>

                        <div className="input-group">
                            <h5>Descripción</h5>
                            <input type="text" name="descripcion" value={descripcionMascota} onChange={(e)=>{setdescripcionMascota(e.target.value)}} id= "descripcion"/>
                        </div>

                        <div className="input-group">
                            <h5>Estado Vacunas</h5>
                            <input type="text" name="estadoVacunas" value={vacunasMascota} onChange={(e)=>{setvacunasMascota(e.target.value)}} id= "estadoVacunas"/>
                        </div>

                        <div className="input-group">
                            <h5>Historail Clinico</h5>
                            <input type="text" name="historialClinico" value={historialMascota} onChange={(e)=>{sethistorialMascota(e.target.value)}} id= "historialClinico"/>
                        </div>

                        <div className="input-group">
                            <h5>Localización</h5>
                            <input type="text" name="localizacion" value={localizacionMascota} onChange={(e)=>{setlocalizacionMascota(e.target.value)}} id= "localizacion"/>
                        </div>

                            <input onClick= {handleSubmit} type="submit" id="sbtn" value="Añadir"></input>
                            <input onClick= {handleSubmit} type="submit" id="sbtn" value="Modificar"></input>
                            <input onClick= {handleSubmit} type="submit" id="sbtn" value="Eliminar"></input>
                            <h4>Recibirás un correo eléctronico confirmando su solicitud</h4>
                        </form>
                    </div>
                </div>
            </div>
         </div>
        
    )
}

export default PerfilMascota;