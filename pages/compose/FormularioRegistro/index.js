import { useState } from "react"
import AppLayout from "components/AppLayout";
import Button from "components/Button/botton";

import {addFormulario} from "firebase/client";
import { useRouter } from "next/router";
const COMPOSE_STATES = {
    USER_NOT_KNOW:0,
    LOADING:1,
    SUCCESS:2,
    ERROR: -1
}

export default function ComposeFormulario(){
 
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATES.LOADING)
  const router = useRouter()
  
  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }
  const handleSubmit =(event)=>{
      event.preventDefault()
      setStatus(COMPOSE_STATES.LOADING)
      addFormulario({
          
          content: message,
        
        })
          .then(() => {
            router.push("/home")
          })
          .catch((err) => {
            console.error(err)
            setStatus(COMPOSE_STATES.ERROR)
          })
      
  }
  const isButtonDisable =!message.length 
   return(
       <>
       <AppLayout>+
        <form onSubmit={handleSubmit}>
           <h1>Registro</h1>
           <h2>Nombre de usuario</h2>
          <input  onChange= {handleChange}  placeholder="nombre" value={message}></input>
          <h2>Apellido</h2>
          <input placeholder="apellido"></input>
          <h2>Correo electronico</h2>
          <input placeholder="Correo" ></input>
          <h2>Contraseña</h2>
          <input placeholder="contraseña"></input>
          <h2>Empresa</h2>
          <input placeholder="Empresa"></input>
          <h2>Tipo de usuario</h2>
          <input placeholder="tipo de usuario"></input>
         <div>
         <Button disabled={isButtonDisable}>guardar</Button>
         </div>
        </form>
       </AppLayout>
        
       
    <style jsx>{`
        div {
            padding:15px
        }
        form{
          display: flex;
          padding: 20px 98px 60px;
          flex-direction: column;
          justify-content: space-around;
          border-radius: 40px;
          min-height: 50px;
          background-color: transparent;
  
         }
        textarea{
            border: 0;
            padding: 15px;
            font-size:21px;
            outline: 0;
            resize: none;
            font-size: 21px;
            width: 100%;
        }
        h1 {
          font-weight: 600;
          font-size: 24px;
          margin-bottom: 1px;
        }
        h2 {
          font-weight: 200;
          font-size: 14px;
          margin-bottom: 1px;
        }
       
        `}</style>
       </>
   ) 
}