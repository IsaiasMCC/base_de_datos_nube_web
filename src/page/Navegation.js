import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import UseAuth from "../auth/useAuth";
const Navegation = ()=>{
    const useAuth = UseAuth();
    return(
        <Fragment>
            <div className="">
                <nav className="nav displaygrid">
                    <div className="navitem1 displayflex">
                        <Link className="item" to="/"> Inicio </Link>
                        <Link className="item" to="/categoria"> Categoria </Link>
                   </div>
                   { (useAuth.isLogged()) ? 
                   <div className="navitem2 displayflex">
                         <Link className="item" onClick={()=>{useAuth.logout()}} to="/"> LogOut </Link>
                   </div>
                   : null }
                  
                   { (!useAuth.isLogged()) 
                   ?
                    <div className="navitem2 displayflex"> 
                        <Link className="item" to="/login"> Login </Link>
                        <Link className="item" to="/register"> Crear Cuenta</Link>
                    </div>

                   : null}
                </nav>
            </div>
        </Fragment>
    );
}

export default Navegation;