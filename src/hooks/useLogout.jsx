import { signOut } from "firebase/auth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth, db } from "../firebasa/config"
import { toast } from "react-toastify"
import { logOut } from "../app/features/userSlice"
import { doc, updateDoc } from "firebase/firestore"
export let  useLogout = () => {
    let [isPending, setIsPending] = useState(false)
    let dispatch = useDispatch()

    let logout = async () => {
        setIsPending(true)
        try{
            let user = doc(db, "users" , auth.currentUser.uid)
            await updateDoc(user, {
                online: false
            })

            await signOut(auth)
            
            dispatch(logOut())
            toast.success("See you")
        } catch(error){
            toast.error(error.message)
        }finally{
            setIsPending(false)
        }
    }
    return {logout, isPending}
}