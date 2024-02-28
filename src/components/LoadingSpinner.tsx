import { FaSpinner } from "react-icons/fa";
import type { LoadingSpinnerProps } from "../types/types";


const LoadingSpinner = ({size=25}:LoadingSpinnerProps) => {
  return (
    <FaSpinner className="animate-spin text-center self-center" size={size}/>
  )
}

export default LoadingSpinner