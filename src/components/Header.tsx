import { Link } from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io"
import { CiMenuBurger } from "react-icons/ci"
import ModalMenu from "./ModalMenu"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setUser } from "../features/auth/authSlice"
import toast from "react-hot-toast"

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const handleShowModal = () => {
    setShowModal(prev => !prev)
  }
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    
    const handleLogoutClick = () => {
        dispatch(setUser(null))
        toast.success('Goodbye!', {position: 'top-right'})
    }

  return (
    <div className="flex w-full justify-between container p-5 items-center">
      <Link to="/" className="text-5xl text-center hidden sm:block font-mono">
        Task Manager
      </Link>
      <Link
        to="/"
        className="text-5xl font-extralight text-center block sm:hidden"
      >
        TM.
      </Link>
      <nav className="hidden sm:flex gap-5 items-end text-lg ">
        {user && (
          <>
            <Link
              to={"/new"}
              className=" btn-animation cursor-pointer flex items-center gap-1"
            >
              <IoIosAddCircleOutline size={30} /> task
            </Link>
            <Link
              to={"/completed-tasks"}
              className=" btn-animation cursor-pointer"
            >
              Completas
            </Link>
            <Link to={"/all-tasks"} className=" btn-animation cursor-pointer">
              Todas
            </Link>
                      <Link
                          to={"/login"}
                          className=" btn-animation cursor-pointer"
                          onClick={handleLogoutClick}
                      >
                          
              Logout
            </Link>
          </>
        )}
      </nav>
      <nav className="flex sm:hidden justify-start items-start">
        <CiMenuBurger size={25} onClick={handleShowModal} />
      </nav>
      {showModal && <ModalMenu handleShowModal={handleShowModal} />}
    </div>
  )
}

export default Header
