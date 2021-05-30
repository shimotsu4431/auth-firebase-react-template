import router from "next/router"
import { FC, useContext, useEffect, useState } from "react"
import { AuthContext } from "../auth/AuthProvider"
import useLogin from "../hooks/useLogin"

const About: FC = (props: any) => {
  const { logOut } = useLogin()
  const user = useContext(AuthContext)

  console.log("user.currentUser", user.currentUser)

  return (
    <div>
      <h1>About</h1>
      <pre>{user && user.currentUser && JSON.stringify(user.currentUser, null, 4)}</pre>
      <button onClick={logOut}>Logout</button>
    </div>
  )
}

export default About
