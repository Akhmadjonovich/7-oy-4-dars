import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebasa/confige";
import { toast } from "react-toastify";
import { login } from "../app/features/userSlice"; 

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const signup = async ({displayName, email, password}) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("Foydalanuvchi yaratilmadi");
      }

     
      await updateProfile(auth.currentUser, {
        displayName,
      });

      
      dispatch(login(req.user));
      toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
    } catch (error) {
      toast.error(error.message || "Xatolik yuz berdi");
    } finally {
      setIsPending(false);
    }
  };

  return { signup, isPending };
};
