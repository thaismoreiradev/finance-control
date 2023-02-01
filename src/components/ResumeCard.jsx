import React from 'react'

export const ResumeCard = ({ title, value }) => {
  return (
    <div className='bg-slate-700 text-white font-semibold w-[28vw] md:w-[25vw] xl:w-[23vw] flex flex-col items-center justify-center py-2 px-4 h-full w-screen md:max-w-[75vw] rounded-md'>
      <h2 className='font-Titillium text-yellow-200 '>{title}</h2>
      <h3>{value}</h3>
    </div>
  )
}
