import React from 'react'
import { useState } from 'react'


export const ValueForm = ({ handleAdd }) => {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState();

    const [message, setMessage] = useState("");



    const handleSave = () => {
        if (!description && !amount) {
            setMessage("Please fill all the fields");
            return

        } else if (!description && amount) {
            setMessage("Enter a description")
            return
        } else if (description && !amount) {
            setMessage("Enter an amount")
            return
        } else if (amount < 1) {
            setMessage("Amount value must be positive")
            return
        } else if (isExpense == null) {
            setMessage("choose one type")
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
        setMessage("")

    }






    return (
        <form
            className='bg-green-300 w-full rounded-md px-2 pt-3 gap-2 flex flex-col text-sm'

            onSubmit={(e) => {
                e.preventDefault()
            }}
        >

            <div className='bg-pink-300 flex'>
                <label>Description</label>
                <input type="text"
                    className='rounded-sm px-1 ml-1 w-full'
                    placeholder='insert a little text here' value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>


            <div className='bg-pink-300 flex'>
                <label htmlFor="">Value</label>
                <input type="number"
                    className='rounded-sm px-1 ml-1 w-full'
                    placeholder='insert a money value here' value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>


            <div className='flex gap-1 '>

                <input

                    type="radio"
                    name='radiotype'
                    id='moneypositive'
                    required
                    value={isExpense}
                    onChange={() => setIsExpense(false)} />
                <label htmlFor="moneypositive">
                    entrada</label>



                <input
                    type="radio"
                    name='radiotype'
                    id='moneynegative'
                    value={isExpense}
                    onChange={() => setIsExpense(true)} />
                <label htmlFor="moneynegative">
                    saída</label>




                <button

                    type='submit'
                    className='bg-blue-500 rounded-md px-5 ml-2'
                    onClick={handleSave}
                >add</button>
            </div>

            <p className='text-xs text-red-700 m-auto pb-1'>{message}</p>

        </form>
    )
}