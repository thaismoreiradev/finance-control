import { useState, useEffect } from 'react'
import { ResumeCard } from './components/ResumeCard'
import { ValueForm } from './components/ValueForm'
import { List } from './components/List'
import { Footer } from './components/Footer'

import {
  BsArrowUpCircleFill,
  BsArrowDownCircleFill,
} from 'react-icons/bs'
import { FaMoneyBillAlt } from 'react-icons/fa'




function App() {



  const data = localStorage.getItem("transactions");


  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  )

  const [inCome, setInCome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(
    () => {

      const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));


      const amountInCome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

      const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      const inCome = amountInCome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

      const total = Math.abs(inCome - expense).toFixed(2)


      setInCome(`R$ ${inCome}`);
      setExpense(`R$ ${expense}`);
      setTotal(`${Number(inCome) < Number(expense) ? "- " : ""}R$ ${total}`);



    }, [transactionsList]
  )


  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }




  return (

    <div className='bg-red-200 w-screen h-screen flex flex-col'>

      <main className='flex flex-col items-center justify-center gap-3 bg-violet-400  m-3'>

        <header className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl'>Finance Control</h1>


          {/* container for resume */}
          <section className='bg-blue-300 flex items-center justify-center max-w-[30%] gap-2 mt-2'>
            <ResumeCard
              title={"INCOME"}
              
              value={inCome}
            />

            <ResumeCard
              title={"EXPENSES"}
              
              value={expense}
            />

            <ResumeCard
              title={"BALANCE"}
                
              value={total}
            />

          </section>
        </header>


        {/* for add a new value */}
        <ValueForm
          handleAdd={handleAdd}
          transactionsList={transactionsList}
          setTransactionsList={setTransactionsList}
        />


        {/* lines for every value added */}
        <List
          itens={transactionsList}
          setItens={setTransactionsList}
        />

      </main>

      <Footer />

    </div>
  )
}

export default App
