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
  // console.log("data")
  // console.log(data)

  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  )
  // console.log("transaction list")
  // console.log(transactionsList)
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
    <div className='m-0 p-0 w-screen h-screen bg-red-200 flex flex-col items-center justify-center gap-3'>

      <header>
        <h1>Finance Control</h1>
      </header>

      {/* container for resume */}
      <div className='bg-blue-300 max-w-[11200px] flex gap-3'>
        <ResumeCard
          title={"entradas"}
          Icon={BsArrowUpCircleFill}
          value={inCome}
        />

        <ResumeCard
          title={"saídas"}
          Icon={BsArrowDownCircleFill}
          value={expense}
        />

        <ResumeCard
          title={"total"}
          Icon={FaMoneyBillAlt}
          value={total}
        />

      </div>



      <ValueForm
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />


      <List
        itens={transactionsList}
        setItens={setTransactionsList}
      />

      <Footer />

    </div>
  )
}

export default App
