import AppLayout from "components/AppLayout"
import { useEffect, useState } from "react"
import Devit from "components/Devit"
import useUser from "hooks/useUser"
import { fetchLatestFormulario } from "firebase/client"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestFormulario().then
    (setTimeline)
    
  }, [user])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, userName, avatar, content, userId}) => (
            <Devit
              avatar={avatar}
              id={id}
              key={id}
              content={content}
              userName={userName}
              uderId={userId}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          background:#ffffffee;
          backdrop-filter: blur(5px);
          align-items: center;
          border-bottom: 1px solid #eee;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  )
}
