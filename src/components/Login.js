import React, {Fragment, useState} from "react";
import { useHistory, useLocation  } from "react-router-dom";
import UseAuth from "../auth/useAuth";
import { Redirect } from "react-router";



const Login = ()=>{
    const useAuth = UseAuth();
    const history =  useHistory();

    //state
const [login, setLogin] = useState({
    correo: '',
    contrasena: ''
});



const  actualizarState = (e)=>{
    setLogin({
        ...login,
        [e.target.name]: e.target.value
    })
}

const verifLogin = ()=>{
    if(login.correo.trim() === '' || login.contrasena.trim() === '')
        return false
    else return true;
}

const submitLogin= (e)=>{
    e.preventDefault();
    if(verifLogin){

        useAuth.login(login)
        .then((result) => {
            console.log(result);
            history.push('user');
        }).catch((err) => {
            console.log(err);
        });
    }
    
}
    if (useAuth.isLogged()){
        return( <Redirect to='user'/>);
    } else {
    

    
    return(
             <Fragment>
            <form className="form-contenedor"
            onSubmit= { submitLogin }
         
            >   <div className="title"> 
                    <h2> Iniciar Sesión </h2>
                </div>

                <div className="form-item">
                    <input 
                        onChange= {actualizarState}
                        type="email"
                        name="correo"
                        value= {login.correo}
                        placeholder="correo"
                    />
                </div>

                
                <div className="form-item">
                    <input 
                        onChange={actualizarState}
                        type="password"
                        name="contrasena"
                        value = {login.contrasena}
                        placeholder="contraseña"
                    />
                </div>

                <input
                className="boton" 
                    type="submit"
                    value="Guardar"
                />
                <div class="parrafo">
                    <a href="#">¿olvidaste tu Contraseña? </a>
                </div>
            </form>
        </Fragment>
    );
    }
}

export default Login;