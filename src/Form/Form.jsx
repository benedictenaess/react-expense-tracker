import React, { useRef, useState } from 'react';
import styles from './Form.module.css';

function Form() {

  const [expenseArray, setExpsenseArray] = useState([]);
  const [expense, setExpense] = useState({});
  const expenseTitle = useRef();
  const expenseAmount = useRef();
  const expenseDate = useRef();
  const expenseCategory = useRef();

  const submitFunction =(e)=>{
    e.preventDefault();
    const newExpenses = {expenseTitle: expenseTitle.current.value,
    expenseAmount: expenseAmount.current.value, expenseDate: expenseDate.current.value, expenseCategory: expenseCategory.current.value};
    setExpense(newExpenses);
    const newExpenseArray = [...expenseArray, expense];
    setExpsenseArray(newExpenseArray);
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
          <ul>
            {expenseArray.map((expense, index)=>{
              return <div key={index}>
                <li>{expense.expenseTitle}</li>
                <li>{expense.expenseAmount}</li>
                <li>{expense.expenseDate}</li>
                <li>{expense.expenseCategory}</li>
              </div>
            })}
          </ul>
        </section>
    </div>
	</>
  )
}

export default Form