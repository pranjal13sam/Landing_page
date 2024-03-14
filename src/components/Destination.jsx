import React, { useEffect, useState } from 'react'
import dash from '../assets/image13.png'
import set4image from  '../assets/image14.png'

export const Destination = () => {

const [imgList, setImg] = useState();
  useEffect(() => {
    fetch(`https://pranjal13sam.github.io/Images.json`)
    .then(
      response=>{
        
        return response.json();
      }
    )
    .then(

      data=> {
        console.log(data)
        setImg(data)}
    )
  }, [])
  
  
  const deststyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'linear-gradient(#41D6C7, #00BEB0)',


  }
  return (
    <div style={deststyle} className='bg-gradient-to-b from-teal-500 to-teal-10'>
      <div className='flex justify-center text-center flex-col items-center relative'>
        <div className='text-[90px] text-[#FFD600] font-[allison]'>
          top
        </div>
        <div className='text-[70px] text-[#FFFFFF] font-[circular] m-[0] absolute top-14'>
          destinations
        </div>
        <div className='w-[100px] h-[30px] py-[10px]'>
          <img src={dash} className='m-auto'></img>
        </div>
        <div className=' w-[100vw] px-[200px] text-white text-[16px]'>
        It’s hard enough deciding to move, you don’t have to worry about where to move to. These are some of the most popular and best locations to move to based on a  number of factors. 
        </div>
        <div>
        <div className='flex gap-[40px] my-[40px]'>
  {imgList && imgList.map(imgData => (
    <div className='relative'>
      <img src={imgData.imageurl} className='h-[300px] w-[200px]' key={imgData.Destination} />
      <span className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center py-2'>
        {imgData.Destination}
      </span>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  )
}
