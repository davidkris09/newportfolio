import React, {useState, useEffect} from 'react'

function Home() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <>
    <div className={fadeIn === true ? 'fadeIn bgImage bg-no-repeat bg-cover bg-center h-screen w-full' : 'fadeOut'}>
      <div className="text-white w-[420px] h-full relative text-left 
          flex justify-center items-start flex-col my-auto mx-40">
          <div className='aboslute mb-[300px] david'>
            <h1 className='text-5xl font-david font-light tracking-[.15em]'>DAVID</h1>
          </div>
          <div className='absolute mb-[170px] kristiawan'>
            <h1 className='text-7xl font-kristiawan font-bold tracking-[.15em]'>KRISTIAWAN</h1>
          </div>
          <div className={`absolute mb-[50px] web`}>
            <h1 className='text-2xl tracking-[.43em]'>Web Developer</h1>
          </div>
          <div className='absolute space-x-20 mt-[100px]'>
            <button className='
              border-solid border-2 rounded-full px-12 py-1 text-lg mt-5 transition duration-300
              font-david hover:cursor-pointer hover:bg-white hover:text-black'>Resume</button>
            <button className='
              border-solid border-2 rounded-full px-12 py-1 text-lg mt-5 transition duration-300
              font-david hover:cursor-pointer hover:bg-white hover:text-black'>Portfolio</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Home