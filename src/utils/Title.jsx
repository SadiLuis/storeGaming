import React from 'react'

const Title = ({ title }) => {
  return (
   <>
      <div className='grid items-center bg-blue-300/50 rounded-full text-center '>
        <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg'>{title}</h1>
      </div>
   </>
  )
}

export default Title