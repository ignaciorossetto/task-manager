import React from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center gap-10 bounce-in-right">
      
      
      <h2 className="text-[70px] font-extralight">welcome</h2>
      <div className="flex flex-col items-center">
        <Link
          to={"/login"}
          className="text-xl hover:scale-110 active:scale-100 duration-150"
        >
          login
        </Link>
        <div className="my-5 flex flex-row items-center justify-center gap-2">
          <span className="w-[50px] h-[1px] bg-black" />
          <span className="font-bold self-center pb-1">or</span>
          <span className="w-[50px] h-[1px] bg-black" />
        </div>
        <span></span>
        <Link
          to={"/sign-up"}
          className="text-xl hover:scale-110 active:scale-100 duration-150"
        >
          sign up
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
