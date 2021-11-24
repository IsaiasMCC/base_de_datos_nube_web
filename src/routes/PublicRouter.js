import "../App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Navegation  from "../page/Navegation";
import  HomePage  from "../page/Home_page";
import  Login  from "../components/Login";
import Formulario from "../components/Formulario";
import Logged from "../page/Logged";

const PublicRouter = ()=>{
    return(
        <Router>

        <Navegation/>
        <Route path="/" exact component = {HomePage}/>
        <Route path="/login" component = {Login}/>
        <Route path = "/register" component = {Formulario}/>
        <Route path = "/user" component = {Logged}/>
        
        </Router>
    );
}

export default PublicRouter;