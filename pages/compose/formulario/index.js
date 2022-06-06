import { useState } from "react"
import AppLayout from "components/AppLayout";
import Button from "components/Button/botton";
import useUser  from "hooks/useUser"

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
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
  const user =useUser()
  const router = useRouter()

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }
  const handleSubmit =(event)=>{
      event.preventDefault()
      setStatus(COMPOSE_STATES.LOADING)
      addFormulario({
          avatar: user.avatar,
          content: message,
          userId: user.uid,
          userName: user.username
        })
          .then(() => {
            router.push("/home")
          })
          .catch((err) => {
            console.error(err)
            setStatus(COMPOSE_STATES.ERROR)
          })
      
  }
  const isButtonDisable =!message.length || status === COMPOSE_STATES.LOADING
   return(
       <>
       <AppLayout>+
        <form onSubmit={handleSubmit}>
         <textarea
          onChange= {handleChange} 
          placeholder =" si buenas" 
          value={message}
          ></textarea>
         <div>
         <Button disabled={isButtonDisable}>guardar</Button>
         </div>
         </form>
       </AppLayout>
        
       
    <style jsx>{`
        div {
            padding:15px
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
        `}</style>
       </>
   ) 
}