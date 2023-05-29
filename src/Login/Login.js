import React, { useState } from "react";
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import huellita from '../../assets/huellita.png';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    function handleChange(name, value){
        if (name === 'usuario'){
            
            setUser(value)
                
        }else{
            if(value.length < 8 ){
                setPasswordError(true);
            }else{
                setPassword(value)
                setPasswordError(false);
            }
        }
    }
    console.log('usuario', user)
    console.log('contraseña', password)

    function handleSubmit(){
        let account = {user, password}
        if(account){
            console.log('account: ', account)
        }
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <img src = {huellita} alt="logo de huellitas de esperanza" className="imagenStyle"/>
                <Title text = 'Bienvenido a Huellitas de Esperanza'/>
                <Label text = '. '/> 
                <Input 
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su correo'
                }}
                handleChange = {handleChange}
                />
                
                <Label text = '.'/>
                <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}
                handleChange = {handleChange}
                param = {passwordError}
                />
                {passwordError &&
                        <label className="labelError">
                            Mínimo 8 caracteres
                        </label>

                }
                <div className="submit-button-container">
                    <button onClick={handleSubmit} className="submit-button">
                        Iniciar sesion
                    </button>
                </div>
                    
                <label>
                    No eres administrador, envía una solitcitud
                </label>
           </div>
        </div>
    )
};

export default Login;