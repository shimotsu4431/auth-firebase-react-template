import { useEffect, FC, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import useLogin from '../hooks/useLogin'
import { AuthContext } from '../auth/AuthProvider'

const Home: FC = (props: any) => {
  const { logOut } = useLogin()
  const user = useContext(AuthContext)

  console.log("user.currentUser", user.currentUser)

  return (
    <div>
      <pre>{user && user.currentUser && JSON.stringify(user.currentUser, null, 4)}</pre>
      <button onClick={logOut}>Logout</button>
    </div>
  )
}

export default Home
