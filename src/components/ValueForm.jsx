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
            setMessage("Enter a number please")
            return
        } else if (amount < 1) {
            setMessage("Amount value must be positive")
            return
        } else if (isExpense == null) {
            setMessage("select one type")
            return
        }


        const currentTransaction = {
            id: new Date(),
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

        <form className='bg-slate-700 text-white w-full rounded-md px-2 lg:px-40 pt-3 gap-2 flex flex-col'
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >

            <div className='flex gap-1'>
                <label>Description</label>
                <input
                    type="text"
                    maxLength="30"
                    className='rounded-sm px-1 ml-1 w-full outline-none text-slate-700'
                    placeholder='insert a little text here' value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>


            <div className='flex gap-1'>
                <label htmlFor="">Value</label>
                <input
                    type="number"
                    max="1000000000"
                    className='rounded-sm px-1 ml-1 w-full outline-none text-slate-700'
                    placeholder='insert a money value here' value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>




            <div className='flex items-center m-auto gap-1 '>
                <input
                    type="radio"
                    name='radiotype'
                    id='moneypositive'
                    required
                    value={isExpense}
                    onChange={() => setIsExpense(false)} />
                <label htmlFor="moneypositive">
                    income</label>

                <input
                    type="radio"
                    name='radiotype'
                    id='moneynegative'
                    value={isExpense}
                    onChange={() => setIsExpense(true)} />
                <label htmlFor="moneynegative">
                    expense</label>

                <button
                    type='submit'
                    className='bg-yellow-200 text-slate-700 font-semibold rounded-md px-5 pb-[2px] ml-2'
                    onClick={handleSave}
                >add</button>
            </div>

            <p className='text-xs text-red-300 m-auto pb-2'>{message}</p>
        </form>
    )
}