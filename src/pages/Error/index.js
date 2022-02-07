import React from "react";
import "./index.css"
import { Link } from "react-router-dom";




function Error(){
    return(
        <div className="contentError">
            <img src="/notfound.png" alt="error 404" />
            <h1>Página não encontrada</h1>
           <Link to="/">
           Voltar para Home</Link>
        </div>
    )
}


export default Error