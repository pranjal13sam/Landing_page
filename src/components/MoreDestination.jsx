import React from 'react'
import dash from '../assets/image15.png'
import set4image from  '../assets/image14.png'
import im1 from '../assets/image17.png'
import im2 from '../assets/image18.png'
import im3 from '../assets/image19.png'
import im4 from '../assets/image20.png'

export const MoreDestination = () => {

  const moredeststyle = {
    width: '100vw',
    height: '165vh',
  }
  return (
    <div style={moredeststyle} className='bg-white from-teal-500 to-teal-10 my-10'>
      <div className='flex justify-center text-center flex-col items-center relative'>
        <div className='text-[80px] text-[#0CA296] font-[allison]'>
          more
        </div>
        <div className='text-[70px] text-[#000000] font-[circular] m-[0] absolute top-14'>
          destinations
        </div>
        <div className='w-[100px] h-[40px] py-[20px] my-4'>
          <img src={dash} className='m-auto'></img>
        </div>
        <div className=' w-[100vw] px-[200px] text-[#565656]'>
        Your peace of mind doesn’t have to be tied to where everyone else is. We have a good number of travel and relocation destinations. Take your time and find the perfect one for you.  
        </div>


    <div class="grid grid-cols-3 gap-2 m-12">
  
      <div className='row-start-1 row-end-3 h-[690px] overflow-hidden'>
        <img src={im1} alt="Estaing, France" className='w-full h-full'></img>
      </div>

  
      <div className='h-[345px]'>
        <img src={im2} alt="Vik i Myrda, Iceland" className='h-full'></img>
      </div>

 
      <div className='h-[345px]'>
        <img src={im3} alt="Hamnoy village, Norway" className='h-full'></img>
      </div>

    
      <div className='col-start-2 col-end-4 row-start-2 h-[329px]'>
        <img src={im4} alt="Montego Bay, Jamaica" className='h-full'></img>
      </div>
    </div>
        </div>
        </div>
  )
}

