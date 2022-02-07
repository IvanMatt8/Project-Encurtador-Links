import React from "react";
import "./index.css"
import { BsYoutube, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom";


function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://youtube.com">
                <BsYoutube color="#c4302b" size={28} />
            </a>
            <a className="social" href="https://www.instagram.com/ivanmatt8/">
                <BsInstagram color="#d6249f" size={24} />
            </a>

            <Link className="menuItem" to="/links">
            Meus Links
            </Link>
        </div>
    )
}



export default Menu