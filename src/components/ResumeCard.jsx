import React from 'react'

export const ResumeCard = ( {title, Icon, value} ) => {
  return (
    <div className='bg-yellow-200'>
        <h2>{title}</h2>
        <Icon className='text-black w-40'>{Icon}</Icon>
        <h3>{value}</h3>
    </div>
  )
}
