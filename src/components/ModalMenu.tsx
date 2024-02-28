import { IoIosAddCircleOutline } from "react-icons/io"
import { Link } from "react-router-dom"

const ModalMenu = ({handleShowModal}:any) => {
  return (
    <div
    className='bg-gray-500/30 h-full w-full flex fixed left-0 top-0'
    >
        <div
        className='w-[200px] bg-white flex flex-col gap-2 px-5 py-3'
        >
            <div
            className="flex justify-between flex-col h-full"
            >
                <div
                className="flex flex-col gap-1"
                >
                    <div
                    className="flex justify-between items-center mb-5 text-[20px] z-40"
                    >
                        <h1
                        className=""
                        >Menu</h1>
                        <span
                        className="cursor-pointer"
                        onClick={handleShowModal}
                        >X</span>
                    </div>
                    <Link to={'/new'}
                        className=' btn-animation cursor-pointer flex items-center gap-1'
                        >
                            <IoIosAddCircleOutline size={30}/> task 
                    </Link>
                    <Link to={'/completed-tasks'}
                        className=' btn-animation cursor-pointer'
                        >
                                Completas
                    </Link>
                    <Link to={'/all-tasks'}
                        className=' btn-animation cursor-pointer'
                        >
                                Todas
                    </Link>

                </div>
                  <Link
                      to={'/login'}
                    className=' btn-animation cursor-pointer'
                    >Login</Link>
            </div>
        </div>
        <div
            onClick={handleShowModal}
            className="w-full h-full z-10 "
        >

        </div>
    </div>
  )
}

export default ModalMenu