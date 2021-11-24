import React,{Fragment, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../auth/useAuth';
import { Redirect } from 'react-router';

const Formulario = () =>{
    
    const useAuth = UseAuth();
    const history = useHistory();
    //state


    const [user, createUser] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        direccion: '',
        genero: '',
        contrasena: '',
        confir_contra: ''
    });


    const verficarUser = () =>{
        return (user.nombre.trim() !=='' && user.telefono.trim() !=='' &&  user.correo.trim() !=='' && user.direccion.trim() &&
        user.genero.trim() !=='' && user.contrasena.trim() !== '', user.confir_contra.trim());
    }

    const submitUser = (e)=>{
      e.preventDefault();  

        if(verficarUser){
            
           useAuth.register(user)
           .then((result) => {
               console.log(result);
               history.push('login');
           }).catch((err) => {
               console.log(err);
           }); 
           
        } 
    }

    const getUser = (e) =>{
        createUser(
            {   
                ...user,
                [e.target.name]: e.target.value,
            }
        )
    }
   //limpiar
    
   if (useAuth.isLogged()){
       return ( <Redirect to="user"/>);
   }
    return(
        <Fragment>
            <form className="form-contenedor"
            onSubmit = { submitUser}
            >   <div className="title"> 
                    <h1> Crear Cuenta </h1>
                </div>
                <div className="form-item">
                    
                    <input 
                        onChange= {getUser}
                        type ="text"
                        name="nombre"
                        value = {user.nombre}
                        placeholder="nombre"
                    />
                </div>

                <div className="form-item">
                
                    <input 
                        onChange = {getUser}
                        type="text"
                        name="telefono"
                        value = {user.telefono}
                        placeholder="telefono"
                    />
                </div>

                <div className="form-item">
             
                    <input 
                        onChange = {getUser}
                        type="email"
                        name="correo"
                        value = {user.correo}
                        placeholder="correo"
                    />
                </div>

                <div className="form-item">
                  
                    <input 
                        onChange = {getUser}
                        type="text"
                        name="direccion"
                        value = {user.direccion}
                        placeholder="dirección"
                    />
                </div>

                <div className="form-item">
                <label id="name"> Genero </label>
                     <br/>
                </div>

                             <input onChange={getUser} type="radio" name="genero" value="true"/>
                            <label  >
                                Masculino
                            </label>
                        
                            <input onChange={getUser}  type="radio" name="genero"  value="false" />
                            <label >
                                Femenino
                            </label>

                <div className="form-item">
                 
                    <input 
                        onChange = {getUser}
                        type="password"
                        name="contrasena"
                        value = {user.contrasena}
                        placeholder="contraseña"
                    />
                </div>

                <div className="form-item">
                  
                    <input 
                        onChange = {getUser}
                        type="password"
                        name="confir_contra"
                        value = {user.confir_contra}
                        placeholder="confirmar contraseña"
                    />
                </div>
            
                    <input
                    className="boton" 
                        type="submit"
                        value="Guardar"
                    />

       
            </form>
        </Fragment>
    );
}

export default Formulario;