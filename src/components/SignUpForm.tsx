import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useSignUpMutation } from "../api/authAPI"
import type { ISignUpForm } from "../types/types"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import LoadingSpinner from "./LoadingSpinner"



const INITIAL_STATE: ISignUpForm = {
  fullName: "",
  email: "",
  confirm_email: "",
  password: "",
  confirm_password: "",
}

const SignUpForm = () => {
    const navigate = useNavigate()
    const [signUpForm, setSignUpForm] = useState<ISignUpForm>(INITIAL_STATE)
    const [errorMessage, setErrorMessage] = useState('')
    const [signUp, data] = useSignUpMutation()
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const equalEmails = equalInputsCheck(signUpForm.email, signUpForm.confirm_email)
        if (!equalEmails) {
            return setErrorMessage("Emails don't match")
        }
        const equalPswd = equalInputsCheck(signUpForm.password, signUpForm.confirm_password)
        if (!equalPswd) {
            return setErrorMessage("Passwords don't match")
        }
        try {
            await signUp(signUpForm).unwrap()
            toast.success('Registration successful')
            console.log(data.error)
            navigate('/login')
        } catch (error: any) {
            toast.error('Registration failed)')
            const message = error?.data?.message || 'Server error'
            setErrorMessage(message)
        }
  }

    const equalInputsCheck = (input_1: any, input_2: any): boolean => {
        console.log(input_1, input_2)
        console.log(input_1 === input_2)
    if (input_1 === input_2) return true   
    return false
    }
    

  return (
    <form
      className="flex flex-col mt-20 gap-3 w-[750px] mb-10 bg-white/65 p-5 shadow-2xl"
      onSubmit={handleSubmit}
      >
  
  {data.isLoading &&
        <div
        className="mt-24 self-center h-[500px]"
        >
            <LoadingSpinner size={40} />

        </div>}
  {!data.isLoading &&
        
          <>
    
      <h2 className="text-[50px] self-center font-mono">sign up</h2>
      <label className="text-[25px] font-extralight" htmlFor="">
        full name
      </label>
      <input
        onChange={handleFormChange}
        className="px-5 text-[20px] py-2 border-2 border-black "
        name="fullName"
        type="text"
        required
      />
      <label className="text-[25px] font-extralight" htmlFor="">
        e-mail
      </label>
      <input
        onChange={handleFormChange}
        className="px-5 text-[20px] py-2 border-2 border-black "
        name="email"
        type="email"
        required
      />
      <label className="text-[25px] font-extralight" htmlFor="">
        confirm e-mail
      </label>
          <input
              onChange={handleFormChange}
        className="px-5 text-[20px] py-2 border-2 border-black "
        name="confirm_email"
        type="email"
        required
      />
      <label className="text-[25px] font-extralight" htmlFor="">
        password
      </label>
      <input
        onChange={handleFormChange}
        className="px-5 text-[20px] py-2 border-2 border-black "
        name="password"
        type="password"
        required
      />
      <label className="text-[25px] font-extralight" htmlFor="">
        confirm password
      </label>
          <input
              onChange={handleFormChange}
        className="px-5 text-[20px] py-2 border-2 border-black "
        name="confirm_password"
        type="password"
        required
      />
      <button className="bg-violet-900 w-full text-white font-thin text-[25px] py-5 mt-8 hover:scale-105 active:scale-100 duration-150">
        create
              </button>
          </>
}
          {errorMessage && 
          <span
          className="text-red-500 text-[20px] text-center"
              >{ errorMessage }</span>
          }
          
    </form>
  )
}

export default SignUpForm
