import Routes from './routes'

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <div
      className="bg-violet-400 rotate-45 fixed h-[400px] w-[3500px] top-[500px] -z-10"
      />
        <Routes />
      </div>
  )
}

export default App