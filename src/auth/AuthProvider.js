import {React, createContext, useState}from "react";
import { Cookies } from "react-cookie";
import axios from "axios";
 export const AuthContex = createContext();
const AuthProvider = ({children})=>{
   
    const cookies = new Cookies();
    const [logged, setLogged] = useState(false);
    const contextValue = {
        
        async login(login){
           
            await axios({
                method: 'post',
                url: 'https://rest-server-login-signup-user.herokuapp.com/auth/login',
                data: login
            }).then(res => {
                console.log(res);
                localStorage.setItem('user', res.data.user.nombre);
                cookies.set('Authorization', res.data.token);
                setLogged(true);
            }).catch( err =>{
                console.log(err);
                throw new Error(err);
            });
        },

        async register(user){    

            const url = "https://rest-server-login-signup-user.herokuapp.com/auth/signup";

            axios({
                method: 'post',
                url: url,
                data: user
            })
            .then( (res) =>{
                // localStorage.setItem('user', res.data.user.nombre);
                // cookies.set('Authorization', res.data.token);
                // setLogged(true);
            }).catch( err =>{
                console.log(err);
                throw new Error(err);
            });
        },

         logout(){
            cookies.remove('Authorization');
            localStorage.removeItem('user');
        },

        isLogged(){
            if(!logged){
                const user = localStorage.getItem('user');
                const token = cookies.get('Authorization');
                
                return (user && token);
            } else
            return logged;
        }

        

    }
    return(  
        <AuthContex.Provider value= {contextValue}>
            { children}
        </AuthContex.Provider>
    );
}

export default AuthProvider;