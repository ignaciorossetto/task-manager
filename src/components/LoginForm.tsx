import { useState } from "react";
import { useLoginMutation } from "../api/authAPI";
import { useAppDispatch } from "../app/hooks";
import { setToken, setUser } from "../features/auth/authSlice";
import type { ILoginForm, IUser } from "../types/types";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [login, _data] = useLoginMutation()
  const { data, isSuccess, isLoading } = _data
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    const {elements} = e.currentTarget
    const email = elements.namedItem('email')
    const isEmail = email instanceof HTMLInputElement
    const password = elements.namedItem('password')
    const isPass = password instanceof HTMLInputElement
    if (!isEmail || email == null) return
    if (!isPass || password == null) return
    const newTask: ILoginForm = {
      email: email.value,
            password: password.value,
    }
          email.value = ''
    password.value = ''
    try {
      await login(newTask)
      isSuccess && dispatch(setToken(data.jwt))
      const user:IUser = data.payload
      isSuccess && dispatch(setUser(user))
      setError(false)
      toast.success(`Welcome ${data.payload.email}!`, {position: 'top-right'})
      navigate('/')
    } catch (error) {
      toast.error('There was an error, please try again')
      setError(true)
    }
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 justify-start items-start mt-10 bg-white/75 p-5 rounded-xl shadow-xl bounce-in-left"
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && 
      <>
      <label 
      htmlFor=""
      className="text-[25px] py-3"
      >Email</label>
      <input 
      type="email" 
      name="email"
      required
      className="px-3 py-2 text-[20px] border-2 border-black/50"
      />
      <label 
      htmlFor=""
      className="text-[25px] py-3"
      >Password</label>
      <input 
      type="password" 
      name="password"
      required
      className="px-3 py-2 text-[20px] border-2 border-black/50"
        />
        {error && <span
          className="text-center font-semibold text-red-500"
        >{'Error en login'}</span>}
      <button
      className="btn-animation self-center mt-5 w-full bg-violet-800 text-white text-[20px]"
      >Login</button>
    </>
    }
    </form>
  )
}


export default LoginForm