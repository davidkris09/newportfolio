import React, {useEffect, useState, useRef} from 'react'
import { Canvas } from '@react-three/fiber'

function About() {
  const [fadeIn, setFadeIn] = useState(false)
  const ref= useRef()

  useEffect(() => {
    setFadeIn(true)
  }, [])
  
  return (
    <>
      <div className='w-full bg-black h-screen'>
        <div className={fadeIn === true ? 'fadeIn' : 'fadeOut'}>
          <div className="text-white w-[420px] h-screen relative text-left flex float-left justify-center items-start flex-col my-auto mx-40">
            <h1>TESS</h1>
          </div>
          <div className='relative float-right justify-end flex-col my-auto'>
            <Canvas>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  )
}

export default About