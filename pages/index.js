import { useState, useEffect } from "react"
import Head from "next/head"
import AppLayout from "components/AppLayout"
import { colors } from "styles/theme"
import Button from "components/Button"
import GitHub from "components/Icons/GitHub"
import Logo from "components/Icons/Logo"
import { loginWithGitHub, onAuthStateChanged } from "firebase/client"
import Avatar from "components/Avatar"

export default function Home() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div className="contai">
        <Head>
          <title>Owlter 🦉</title>
          <link rel="icon" href="favicon.ico" />
        </Head>

        <AppLayout>
          <section>
            <Logo width="100" />
            <h1>Owlter</h1>
            <h2>
              Talk about web development <br /> witdh developers 👨‍💻👩‍💻
            </h2>

            <div>
              {user === null && (
                <Button onClick={handleClick}>
                  <GitHub fill="#fff" width={24} height={24} />
                  Login with GitHub
                </Button>
              )}
              {user && user.avatar && (
                <Avatar src={user.avatar} alt="asd" text={user.username} />
              )}
            </div>
          </section>
        </AppLayout>
      </div>

      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        div {
          margin-top: 8px;
        }

        img {
          witdh: 150px;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          font-size: 32px;
          margin-bootom: 0;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 18px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
