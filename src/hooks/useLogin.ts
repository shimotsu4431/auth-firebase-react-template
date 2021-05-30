import router from "next/router";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

import { auth } from '../utils/firebase'

type useLoginReturnType = {
  logOut: () => Promise<void>
  setCurrentUser: Dispatch<SetStateAction<object>>
}

const useLogin = (): useLoginReturnType => {
  const [currentUser, setCurrentUser] = useState<null | object>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push('/login')
    })
  }, [])

  const logOut = useCallback(async() => {
      try {
        await auth.signOut()
        router.push('/login')
      } catch (error) {
        alert(error.message)
      }
  },[])

  return { logOut, setCurrentUser }
}

export default useLogin
