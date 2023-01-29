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
                    <th className='border'>Description</th>
                    <th className='border'>Value</th>
                    <th rowSpan={2}>Type</th>

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
