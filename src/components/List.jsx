import React from 'react'
import { ListItem } from './ListItem'



export const List = ({ itens, setItens }) => {


    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };



    return (


        <table>

            <thead>
                <tr>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Type</th>


                </tr>
            </thead>

            <tbody>
                {itens?.map((item, index) => (
                    <ListItem key={index} item={item} onDelete={onDelete} />
                ))}


            </tbody>
        </table>


    )
}
