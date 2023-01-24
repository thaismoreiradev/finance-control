import React from 'react'

import { useState } from 'react'

export const ValueForm = ({ handleAdd }) => {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState();



    const handleSave = () => {
        if (!description && !amount) {
            alert("Please fill all the fields");
            return

        } else if (!description && amount) {
            alert("Enter a description")
            return
        } else if (description && !amount) {
            alert("Enter an amount")
            return
        } else if (amount < 1) {
            alert("Amount value must be positive")
            return
        }


        const currentTransaction = {
            id: Math.round(Math.random() * 1000),
            description: description,
            amount: amount,
            expense: isExpense,
        }


        handleAdd(currentTransaction)
        setDescription("")
        setAmount("")
    }









    return (
        <form className='bg-green-300'
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <label htmlFor="">Description</label>
            <input type="text" placeholder='insert a little text here' value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="">Value</label>
            <input type="number" placeholder='insert money value here' value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />



            <input
                type="radio"
                name='radiotype'
                id='moneypositive'
                value={isExpense}
                onChange={() => setIsExpense(false)} />

            <label htmlFor="moneypositive">entrada</label>


            <input
                type="radio"
                name='radiotype'
                id='moneynegative'
                value={isExpense}
                onChange={() => setIsExpense(true)} />
            <label htmlFor="moneynegative">saída</label>


            <button
                className='bg-blue-500 m-3'
                onClick={handleSave}
            >Add</button>




        </form>
    )


}