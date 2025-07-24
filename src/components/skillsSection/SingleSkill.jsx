import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='hover:-translate-y-6 transition-all duration-500'>
        <div className='flex flex-col items-center gap-1 relative'>
            <div className='bg-white text-cyan h-[60px] w-[60px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-3xl border-2 border-orange'>{imgSvg}</div>
            <p className='text-white font-bold text-[10px]'>{text}</p>
        </div>
        <div className='w-[60px] h-[130px] bg-orange absolute top-[30px] -z-10'></div>
    </div>
  )
}

export default SingleSkill