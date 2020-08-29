import { useEffect, useState } from "react"

import AppLayaout from "components/AppLayout"
import Avatar from "components/Avatar"
import Owlit from "components/Owlit"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("url")
      .then((res) => res.json)
      .then((data) => setTimeline(data))
  }, [])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, avatar, username, message }) => (
            <Owlit
              keyId={id}
              id={id}
              message={message}
              avatar={avatar}
              username={username}
            />
          ))}
        </section>

        <nav></nav>
      </AppLayout>

      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          position: sticky;
          height: 49px;
          top: 0;
          border-bottom: 1px solid #ccc;
          width: 100%;
        }

        h2 {
          font-weight: 800;
          font-size: 21px;
        }

        section {
          padding-top: 49px;
        }

        nav {
          bottom: 0;
          border-top: 1px solid #ccc;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </>
  )
}
