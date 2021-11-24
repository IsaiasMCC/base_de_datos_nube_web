import { useContext } from "react";
import {AuthContex} from "./AuthProvider";

const UseAuth = ()=>{
    return useContext(AuthContex);   
}

export default UseAuth;