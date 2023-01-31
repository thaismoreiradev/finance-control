import React from 'react'
import { ListItem } from './ListItem'



export const List = ({ itens, setItens }) => {


    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };



    return (


        <table className='border w-full text-left'>

            <thead>
                <tr>
                    <th className='border px-2 font-Titillium '>Description</th>
                    <th className='border px-2 font-Titillium'>Value</th>
                    <th colSpan={2} className='font-Titillium pl-2 pr-0 py-1'>Type</th>

                </tr>
            </thead>

            <tbody>



                {itens.map(item => <ListItem
                    item={item}
                    onDelete={onDelete}
                />)
                }

            </tbody>
        </table>


    )
}
