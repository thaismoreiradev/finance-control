import React from 'react'
import {
  BsArrowUpCircleFill,
  BsArrowDownCircleFill,
  BsTrashFill
} from 'react-icons/bs'



export const ListItem = ({ item, onDelete }) => {



  return (
    <tr className='border text-xs sm:text-sm break-all'>
      <td className='border px-2 py-1'>{item.description}</td>
      <td className='border px-2 py-1'>{item.amount}</td>


      <td className='px-2 py-1 flex gap-2' >{item.expense ? (<BsArrowDownCircleFill />) : (<BsArrowUpCircleFill />)
      }
      
        <BsTrashFill onClick={() => onDelete(item.id)} 
        className='cursor-pointer' />
      
      </td>
      

    </tr>



  )
}

