import React, { useState } from 'react';
import styles from './Form.module.css';

function Form() {
  

  return (
	<>
    <div className={styles.formContainer}>
        <form className={styles.inputForm} action="expense-tracker">
          <div>
            <label htmlFor="expense-title">Title</label>
            <input name='expense-title' id='expense-title' type="text" />
          </div>

          <div>
            <label htmlFor="expense-amount">Amount</label>
            <input name='expense-amount' id='expense-amount' type="number" />
          </div>

          <div>
            <label htmlFor="expense-date">Date</label>
            <input name='expense-date' id='expense-date' type="date" />
          </div>

          <div>
            <label htmlFor="category">Select category</label>
            <select name="category" id="category">
              <option value="default">--</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="bills">Bills</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <button>Add expense</button>
        </form>
        <section className={styles.expensesContainer}>
        
        </section>
    </div>
	</>
  )
}

export default Form