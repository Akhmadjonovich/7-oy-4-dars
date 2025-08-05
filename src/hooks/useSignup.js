import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth, db } from "../firebasa/config" 
import { login } from '../app/features/userSlice'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { collection, addDoc, setDoc, doc } from "firebase/firestore"

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
      console.log("signup called with:", { displayName, email, password })

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      if (!user) throw new Error("Authentication failed")

      const photoURL = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(displayName)}`

      await updateProfile(user, {
        displayName,
        photoURL,
      })

      
      await user.reload()

      const idToken = await user.getIdToken()
      const safeUser = {
        uid: user.uid,
        email: user.email,
        displayName: displayName,
        photoURL: photoURL,
        token: idToken,
      }

      
      try {
        await setDoc(doc(db, "users", user.uid), {
          online: true,
          displayName: displayName,
          photoURL: photoURL,
          email: user.email,
          createdAt: new Date(),
        })
      } catch (fsError) {
        console.error("Firestore yozishda xato:", fsError)
        toast.error("Foydalanuvchini bazaga saqlashda xato yuz berdi.")
      }

      dispatch(login(safeUser))
      toast.success(`Welcome, ${displayName}`)
    } catch (error) {
      console.log("Error message:", error?.message)
      
    } finally {
      setIsPending(false)
    }
  }

  return { signup, isPending }
}
