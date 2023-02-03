import React, {useEffect, useState, useRef} from 'react'
import { Canvas } from '@react-three/fiber'

function Skills() {
  const [fadeIn, setFadeIn] = useState(false)
  const [percent, setPercent] = useState(false)
  const ref= useRef()

  useEffect(() => {
    setFadeIn(true)
  }, [])
  
  return (
    <>
      <div className='w-full bg-black h-screen'>
        <div className={fadeIn === true ? 'fadeIn' : 'fadeOut'}>
          <div className="text-white w-[420px] h-screen relative text-left flex float-left justify-center items-start flex-col my-auto mx-40">
            <div className='w-[420px]'>
              <ul id='list' className='list-none'>
                <li><span className="expand html"></span><em>HTML</em><span><em className='float-right'>80%</em></span></li>
                <li><span className="expand css"></span><em>CSS</em><span><em className='float-right'>70%</em></span></li>
                <li><span className="expand javascript"></span><em>Javacript</em><span><em className='float-right'>75%</em></span></li>
                <li><span className="expand reactjs"></span><em>ReactJS</em><span><em className='float-right'>60%</em></span></li>
                <li><span className="expand nodejs"></span><em>NodeJS</em><span><em className='float-right'>30%</em></span></li>
                <li><span className="expand java"></span><em>Java</em><span><em className='float-right'>20%</em></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills