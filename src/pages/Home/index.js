import React from "react";
import { useState } from "react";
import "./index.css"
import { FiLink } from "react-icons/fi"
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api"
import { saveLink } from "../../services/storeLinks"

function Home(){

const [link, setLink] = useState("")
const [data, setData] = useState("")
const [showModal, setShowModal] = useState(false);


async function handleShortLink(){
  try{
    const response = await api.post("/shorten", {
      long_url: link
        })
       setData(response.data);
       setShowModal(true);
       saveLink("@encurtaLink", response.data)
       setLink("");
  }catch{
    alert("Error")
    setLink("")
  }

}

    return (
        <div className="containerHome">
          <div className="logoImg">
            <img src="/Logo.png" alt="Sujeito Link Logo" />
            <h1>Project Routes Links</h1>
            <span>Adicione seu Link para acessar 👇 </span>
          </div>

            <div className="areaInput">
                <div>
             <FiLink size="24" color="#fff" />
             <input placeholder="Adicione seu link aqui..." value={link} 
             onChange={(e)=>{setLink(e.target.value)}}
             />
                </div>
                <button onClick={handleShortLink}>Encurtar Link</button>
            </div>

            <Menu />

       {showModal && (
         <LinkItem 
         closeModal={()=> setShowModal(false)}
         content={data}
         />
       )}

        </div>
    )
};


export default Home;