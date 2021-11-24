import axios from "axios";
import React, { Fragment , useState} from "react";
import { Redirect } from "react-router";
import UseAuth from "../auth/useAuth";

import { Cookies }  from "react-cookie";

const Logged = ()=>{
    const useAuth = UseAuth();
    const cookies = new Cookies();

    const [user, setUser] = useState({});

    if (!useAuth.isLogged()){
        console.log(useAuth.isLogged())
    return <Redirect to="/"/>
    }
    else
    {
        const User = (e)=>{
            e.preventDefault();
            let user = '';
        axios({
            method: 'post',
            url: 'https://rest-server-login-signup-user.herokuapp.com/api/users',
            data: { "Authorization": cookies.get('Authorization')} 
        })
        .then( resp =>{
             user = resp.data.user;
             console.log(user);
             setUser(user);
        })
        .catch(err =>{
            console.log(err);
        });
        console.log(user);
        }

    return(
        <Fragment>
            <div>
                <input
                 value="perfil" 
                 type="button"
                 onClick= {User}
                 />
                <p className="title"
                   
                > you is logged full  {user.nombre}</p>
            </div>
            
        </Fragment>
    );
    }
}

export default Logged;