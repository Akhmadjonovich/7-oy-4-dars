import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth } from "../firebasa/config" 
import { login } from '../app/features/userSlice'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { toast } from "react-toastify"

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false)
  const dispatch = useDispatch()

  const signup = async (displayName, email, password) => {
    if (!displayName || !email || !password) {
      toast.info("Iltimos, barcha maydonlarni to'ldiring.")
      return
    }

    setIsPending(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      if (!user) throw new Error("Authentication failed")

      await updateProfile(user, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(displayName)}`,
      })
      

      dispatch(login(user))
      toast.success(`Welcome, ${displayName}`)
    } catch (error) {
      
      toast.error(error?.message || "Signup failed")
      console.error("Signup error:", error)
    } finally {
      setIsPending(false)
    }
  }

  return { signup, isPending }
}
