import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth } from "../firebasa/config" 
import { login as _login } from '../app/features/userSlice'
import {signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false)
  const dispatch = useDispatch()

  const login = async (email, password) => {
    if ( !email || !password) {
      toast.info("Iltimos, barcha maydonlarni to'ldiring.")
      return
    }

    setIsPending(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      if (!user) throw new Error("Authentication failed")

      dispatch(_login(user))
      toast.success(`Welcome back, ${user.displayName}`)
    } catch (error) {
      
      toast.error(error?.message || "Signup failed")
      console.error("login error:", error)
    } finally {
      setIsPending(false)
    }
  }

  return { login, isPending }
}
