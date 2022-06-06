import { useEffect} from "react"
import useUser,{USER_STATES} from "hooks/useUser"
import Head from "next/head"

import AppLayout from "components/AppLayout"
import Avatar from "components/Avatar"
import Button1 from "components/Button/botton1"
import Button from "components/Button/botton"
import Google from "components/Icons/Google"
import Logo from "components/Icons/Logo"

import { colors } from "styles/theme"

import { loginWithGoogle } from "firebase/client"
import {useRouter} from "next/router"

export default function Home() {
  const user= useUser()
  const router = useRouter()
  

  useEffect(() => {
    user && router.replace("/home")
  },[user])

  const handleClick = () => {
    loginWithGoogle()
      .catch((err) => {
        console.log(err)
      })
  }
  const handleClick2 = () => {
  
  }
 
  return (
    <>
    
  
      <Head>
      <nav>
    <div class="nav-wrapper">
      <a href="#42a5f5 blue lighten-1" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">opcion 1</a></li>
        <li><a href="badges.html">opcion 2</a></li>
        <li><a href="collapsible.html">opcion 3</a></li>
      </ul>
    </div>
  </nav>
        <title>Iot</title>
        <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>
      <AppLayout>
        <section>
          <Logo width="100" />
          <h1>Iniciar sesión</h1>
          <form>
            <input placeholder="Correo" ></input>
            <input  placeholder="contraseña"></input>
            <Button onClick={handleClick2}>
                Iniciar sesión
              </Button>
              
          </form>
          <div >
          <a href="/"> Olvidé mi contraseña</a>
          </div>
          

          <div>
            {user === USER_STATES.NOT_LOGGED && (
              <>
              <Button1 onClick={handleClick}>
                <Google fill="#fff" width={24} height={24} />
                Login with Google
              </Button1>
            </>
            )}
            {user && user.avatar && (
              <div>
                <Avatar
                  alt={user.username}
                  src={user.avatar}
                  text={user.username}
                />
              </div>
            )}
            { user === USER_STATES.NOT_KNOWN && <span>Loading ...</span>}
          </div>
           <p >No tienes ninguna cuenta <a href="/compose/FormularioRegistro">Regístrate</a></p>
        </section>
    
      </AppLayout>
    

      <style jsx>{`
    
        div {
          margin-top: 16px;
        }
         form{
          display: flex;
          padding: 20px 28px 10px;
          flex-direction: column;
          justify-content: space-around;
          border-radius: 40px;
          min-height: 120px;
          background-color: transparent;
  
         }
     
        section {
          
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0px 30px;
          min-height: calc(100vh - 200px);
          
        }

        h1 {
          color: ${colors.primary};
          font-weight: 400;
          font-size: 24px;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
