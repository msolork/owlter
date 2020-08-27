import { useState, useEffect } from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'

import {loginWithGitHub, onAuthStateChanged} from '../firebase/client'

export default function Home() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGitHub().then(user => {
      const {avatar, url, username} = user
      setUser(user)
    })
    .catch(err => console.log(err))
  }


  return (

    <>

      <div className="contai">
        <Head>
          <title>Owlter 🦉</title>
          <link rel="icon" href="favicon.ico"/>
        </Head>

      <AppLayout>

        <section>
          <img src="./logo-blue.png" alt="Logo" width="50" />
          <h1>Owlter</h1>
          <h2>Talk about web development <br /> witdh developers 👨‍💻👩‍💻</h2>

          <div>

            {
              user === null &&
                <Button onClick={handleClick}>
                  <GitHub fill='#fff' width={24} height={24} />
                  Login with GitHub
                </Button> 
            }
            {
              user && user.avatar &&
                <div>
                  <img src={user.avatar} alt={user.username} />
                  <strong>{user.username}</strong>
                </div>
            }
            

          </div>


        </section>

        

      </AppLayout>

      </div>


      <style jsx>{`

        section{
          display: grid;
          height: 100%;
          place-items: center;
          place-content:center;
        }

        div{
          margin-top:8px;
        }

        img{
          witdh: 150px;
        }


        h1{
          color: ${colors.primary};
          font-weight: 800;
          margin-bootom: 0;
        }

        h2{
          color: ${colors.secondary};
          font-size: 18px;
          margin:0;
        }


      `}</style>

    </>
   
  )
}
