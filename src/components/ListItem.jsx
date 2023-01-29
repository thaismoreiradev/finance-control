import React from 'react'
import {
  BsArrowUpCircleFill,
  BsArrowDownCircleFill,
  BsTrashFill
} from 'react-icons/bs'



export const ListItem = ({ item, onDelete }) => {



  return (
    <tr className='border border-collapse text-xs'>
      <td className='border'>{item.description}</td>
      <td className='border'>{item.amount}</td>
      <td>{item.expense ? (<BsArrowDownCircleFill />) : (<BsArrowUpCircleFill />)
      }</td>
      <td onClick={() => onDelete(item.id)}><BsTrashFill /></td>
    </tr>


    // <tr className='table border-collapse text-xs'>
    //   <td className=''>{item.description}</td>
    //   <td>{item.amount}</td>
    //   <td>{item.expense ? (<BsArrowDownCircleFill />) : (<BsArrowUpCircleFill />)
    //   }</td>
    //   <td onClick={() => onDelete(item.id)}><BsTrashFill /></td>
    // </tr>
  )
}

