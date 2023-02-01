import { useState, useEffect } from 'react'
import { ResumeCard } from './components/ResumeCard'
import { ValueForm } from './components/ValueForm'
import { List } from './components/List'
import { Footer } from './components/Footer'





export const App = () => {


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



    <div className='bg-slate-100 border-slate-700 w-screen h-screen m-auto flex flex-col justify-between overflow-auto	text-xs sm:text-sm'>
      <main className='bg-white rounded-xl px-2 py-5 flex flex-col items-center justify-center self-center min-w-[290px] mt-5 md:mt-10 gap-3 m-3'>

        <header className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-3xl xl:text-4xl text-slate-800 font-Titillium font-semibold pt-1'>Finance Control</h1>
        </header>


        {/* container for resume */}
        <section className='flex justify-center gap-2 mt-2 break-all'>

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



        {/* section for add a new value */}
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


