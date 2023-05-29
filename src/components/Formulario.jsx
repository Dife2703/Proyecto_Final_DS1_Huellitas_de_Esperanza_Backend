import { useRef } from "react";
import { useForm } from "react-hook-form";



const Formulario = () => {

    const { register, formState: { errors }, handleSubmit,watch } = useForm();
    const contrasena = useRef({});
    contrasena.current = watch('contrasena', ''); // Obtener el valor actual del campo 'password'

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h2>Gracias por querer ser parte de Huellitas de Esperanza</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="grid-layout" >
                    <div className="field">
                        <label>Nombre:</label>
                        <input type="text"{...register('nombre', {
                            required: true,
                            maxLength: 30

                        })} />
                        {errors.nombre?.type === 'required' && <p>El campo Nombre es requerido</p>}
                        {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 30 caracteres</p>}
                    </div>
                    <div className="field">
                        <label>Correo eléctronico:</label>
                        <input type="email"{...register('correo', {
                            pattern: "^[^\s@]+@[^\s@]+\.[^\s@]+$",
                            required: true

                        })} />
                        {errors.correo?.type === 'required' && <p>El campo Correo eléctronico es requerido</p>}
                        {errors.correo?.type === 'pattern' && <p>El formato del Correo eléctronico es incorrecto</p>}

                    </div>
                    <div className="field">
                        <label>Contraseña</label>
                        <input type="password"{...register('contrasena', {
                            required: true,
                            maxLength:8
                        })} />
                        {errors.contrasena?.type === 'required' && <p>El campo Contraseña es requerido</p>}
                        {errors.contrasena?.type === 'maxLength' && <p>El campo Contraseña debe tener menos de 30 caracteres</p>}
                    </div>
                    <div className="field">
                        <label>Confirmar contraseña</label>
                        <input type="password"{...register('confirmarContrasena', {
                            required: true,
                            validate: (value) => value === contrasena.current,
                            maxLength:8
                        })} />
                        {errors.confirmarContrasena?.type === 'required' && <p>El campo confirmar Contraseña es requerido</p>}
                        {errors.confirmarContrasena?.type === 'validate' && <p>Los campos no coinciden</p>}
                        {errors.confirmarContrasena?.type === 'maxLength' && <p>El campo confirmar Contraseña debe tener menos de 30 caracteres</p>}
                    </div>

                    
                    <div className="field">
                        <label>CC/NIT </label>
                        <input type="number"{...register('Id', {
                            required: true,
                            maxLength: 30
                        })} />
                        {errors.Id?.type === 'required' && <p>El campo CC/NIT es requerido</p>}
                        {errors.Id?.type === 'maxLength' && <p>El campo cc/NIT debe tener menos de 30 caracteres</p>}
                    </div>
                    <div className="field">
                        <label>Ciudad</label>
                        <input type="text"{...register('ciudad', {
                            required: true,
                            maxLength: 30
                        })} />
                        {errors.ciudad?.type === 'required' && <p>El campo Ciudad es requerido</p>}
                        {errors.ciudad?.type === 'maxLength' && <p>El campo Ciudad debe tener menos de 30 caracteres</p>}
                    </div>
                    <div className="field">
                        <label>Teléfono</label>
                        <input type="number"{...register('Telefono', {
                            required: true,
                            maxLength: 20
                        })} />
                        {errors.Telefono?.type === 'required' && <p>El campo Telefono es requerido</p>}
                        {errors.Telefono?.type === 'maxLength' && <p>El campo Telefono debe tener menos de 20 caracteres</p>}
                    </div>
                    <div className="field">
                        <label>Motivo adopción</label>
                        <input type="text"{...register('Motivo', {
                            required: true,
                            maxLength: 100
                        })} />
                        {errors.Motivo?.type === 'required' && <p>El campo Motivo adopción es requerido</p>}
                        {errors.Motivo?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 100 caracteres</p>}
                    </div>
                </div>
                <input className="button" type="submit" value="Enviar solicitud" />
            </form>
            <h3>Recibirá un correo eléctronico confirmando su solicitud </h3>
            <a href="./Login.js" id="texto-clickeable">Inicia sesión</a>
            <img className="logo" src={'src/assets/huellita.png'} alt={"Huellita"}/>
        </div>
    )
}

export default Formulario;