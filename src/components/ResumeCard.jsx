import React from 'react'

export const ResumeCard = ({ title, value }) => {
  return (
    <div className='bg-yellow-200 flex flex-col items-center justify-center p-2 w-screen rounded-md text-xs'>
      <div className='flex items-center justify-center gap-2'>
        <h2>{title}</h2>



      </div>
      <div>
        <h3>{value}</h3>
      </div>
    </div>
  )
}
