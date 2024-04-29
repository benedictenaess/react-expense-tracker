import React, { useRef, useState } from 'react';
import styles from './Form.module.css';

function Form() {

  const [expenseArray, setExpenseArray] = useState([]);
  const [expense, setExpense] = useState({});

  const expenseTitle = useRef();
  const expenseAmount = useRef();
  const expenseDate = useRef();
  const expenseCategory = useRef();

  const submitFunction =(e)=>{
    e.preventDefault();
    const newExpenses = {
      expenseTitle: expenseTitle.current.value,
      expenseAmount: expenseAmount.current.value, 
      expenseDate: expenseDate.current.value, 
      expenseCategory: expenseCategory.current.value};

    setExpense(newExpenses);
    setExpenseArray((prev)=>[...prev, newExpenses]);
  }

  const deleteExpense =(indexToRemove)=>{
    const updateExpenses = expenseArray.filter((_, index)=> index !== indexToRemove);
    setExpenseArray(updateExpenses);
  }

  return (
	<>
    <div className={styles.formContainer}>
        <form className={styles.inputForm} action="expense-tracker">
          <div>
            <label htmlFor="expense-title">Title</label>
            <input ref={expenseTitle} name='expense-title' id='expense-title' type="text" />
          </div>

          <div>
            <label htmlFor="expense-amount">Amount</label>
            <input ref={expenseAmount} name='expense-amount' id='expense-amount' type="number" />
          </div>

          <div>
            <label htmlFor="expense-date">Date</label>
            <input ref={expenseDate} name='expense-date' id='expense-date' type="date" />
          </div>

          <div>
            <label htmlFor="category">Select category</label>
            <select ref={expenseCategory} name="category" id="category">
              <option value="default">--</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="bills">Bills</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>

          <button onClick={submitFunction}>Add expense</button>
        </form>

        <section className={styles.expensesContainer}>
          <ul className={styles.expenseList}>
            {expenseArray.map((expense, index)=>{
              return <li key={index}>
                <p>{expense.expenseTitle}</p>
                <p>{expense.expenseAmount}</p>
                <p>{expense.expenseDate}</p>
                <p>{expense.expenseCategory}</p>
                <button onClick={()=>deleteExpense(index)}>Remove</button>
              </li>
            })}
          </ul>
        </section>
    </div>
	</>
  )
}

export default Form