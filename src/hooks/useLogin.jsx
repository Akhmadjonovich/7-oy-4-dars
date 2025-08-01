import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../app/features/userSlice"
export let useLogin = () => {
    let [isPending, setIsPending] = useState(false)
    let dispatch = useDispatch()

    let login = (email, password) => {
        console.log(email, password);
    }
    return {login, isPending}
}