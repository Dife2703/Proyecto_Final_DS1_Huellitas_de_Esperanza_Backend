import { useForm } from "react-hook-form";



const Formulario = () => {

    const{register,formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return ( <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input  type="text"{...register('nombre', {
                    required: true,
                    maxLength: 30

                })}/>
                {errors.nombre?.type === 'required' && <p>El campo Nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 30 caracteres</p>}
            </div>
            <div>
                <label>Correo eléctronico</label>
                <input type="email"{...register('correo',{
                    pattern: "^[^\s@]+@[^\s@]+\.[^\s@]+$",
                    required: true

                })}/>
                {errors.correo?.type === 'required' && <p>El campo Correo eléctronico es requerido</p>}
                {errors.correo?.type === 'pattern' && <p>El formato del Correo eléctronico es incorrecto</p>}

            </div>
            <div>
                <label>Contraseña</label>
                <input type="password"{...register('contraseña',{
                    required: true,
                    maxLength: 30
                })}/>
                {errors.contraseña?.type === 'required' && <p>El campo Contraseña es requerido</p>}
                {errors.contraseña?.type === 'maxLength' && <p>El campo Contraseña debe tener menos de 30 caracteres</p>}
            </div>
            <div>
                <label>confirmar contraseña</label>
                <input type="password"{...register('confirmarContraseña',{
                    required: true,
                    maxLength: 30
                })}/>
                {errors.confirmarContraseña?.type === 'required' && <p>El campo confirmar Contraseña es requerido</p>}
                {errors.confirmarContraseña?.type === 'maxLength' && <p>El campo confirmar Contraseña debe tener menos de 30 caracteres</p>}
            </div>
            <div>
                <label>CC/NIT </label>
                <input type="number"{...register('Id',{
                    required: true,
                    maxLength: 30
                })}/>
                {errors.Id?.type === 'required' && <p>El campo CC/NIT es requerido</p>}
                {errors.Id?.type === 'maxLength' && <p>El campo cc/NIT debe tener menos de 30 caracteres</p>}
            </div>
            <div>
                <label>Ciudad</label>
                <input type="text"{...register('ciudad',{
                    required: true,
                    maxLength: 30
                })}/>
                {errors.ciudad?.type === 'required' && <p>El campo Ciudad es requerido</p>}
                {errors.ciudad?.type === 'maxLength' && <p>El campo Ciudad debe tener menos de 30 caracteres</p>}
            </div>
            <div>
                <label>Teléfono</label>
                <input type="tel"{...register('Telefono',{
                    required: true,
                    maxLength: 20
                })}/>
                {errors.Telefono?.type === 'required' && <p>El campo Telefono es requerido</p>}
                {errors.Telefono?.type === 'maxLength' && <p>El campo Telefono debe tener menos de 20 caracteres</p>}
            </div>
            <div>
                <label>Motivo adopción</label>
                <input type="text"{...register('Motivo',{
                    required: true,
                    maxLength: 100
                })}/>
                {errors.Motivo?.type === 'required' && <p>El campo Motivo adopción es requerido</p>}
                {errors.Motivo?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 100 caracteres</p>}
            </div>
            <input type="submit" value="Enviar solicitud"/>
        </form>

    </div>
    )
}

export default Formulario;