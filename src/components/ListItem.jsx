import React from 'react'
import {
    BsArrowUpCircleFill,
    BsArrowDownCircleFill,
    BsTrashFill
} from 'react-icons/bs'






export const ListItem = ({ item, onDelete } ) => {




    



  return (
    <tr>
        <td>{item.description}</td>
        <td>{item.amount}</td>
        <td>{item.expense? (<BsArrowDownCircleFill />) : (<BsArrowUpCircleFill />)        
        }</td>
        <td onClick={() => onDelete(item.id)}><BsTrashFill /></td>
    </tr>
  )
}

