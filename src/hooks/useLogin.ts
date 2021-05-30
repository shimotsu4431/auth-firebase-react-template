import router from "next/router";
import { useCallback } from "react";

import { auth } from '../utils/firebase'

type useLoginReturnType = {
  logOut: () => Promise<void>
}

const useLogin = (): useLoginReturnType => {
  const logOut = useCallback(async() => {
      try {
        await auth.signOut()
        router.push('/login')
      } catch (error) {
        alert(error.message)
      }
  },[])

  return { logOut }
}

export default useLogin
