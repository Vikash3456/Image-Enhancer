import React from 'react'
import Home from './component/Home.jsx'
const App = () => {
  return (
    <div  className='flex flex-col items-center  justify-center min-h-screen  bg-gray-100 py-8 px-4'>
    <div className=' text-center mb-8 '>
      <h1 className=' text-5xl  font-bold text-gray-800 mb-4'>
        AI Image Enhancer
      </h1>
        <p className=' text-lg text-gray-500'>
          Upload your Image Here and let AI Enhance In Second..... 
        </p>
    </div>
     <  Home/>

    <div className='text-lg text-gray-500 mt-6'>
      Power By Vikash Kushwaha
    </div>

    </div>
  )
}

export default App