import router from "next/router"
import { FC, useEffect, useState } from "react"
import useLogin from "../hooks/useLogin"

import { auth } from '../utils/firebase'

const About: FC = (props: any) => {
  const [currentUser, setCurrentUser] = useState<null | object>(null)
  const { logOut } = useLogin()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push('/login')
    })
  }, [])

  console.log("currentUser", currentUser)

  return (
    <div>
      <h1>About</h1>
      <pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>
      <button onClick={logOut}>Logout</button>
    </div>
  )
}

export default About
