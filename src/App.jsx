import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <form action="expense-tracker">
        <div>
          <label htmlFor="expense-title">Title</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="expense-amount">Amount</label>
          <input type="number" />
        </div>

        <div>
          <label htmlFor="expense-date">Date</label>
          <input type="date" />
        </div>

        <div>
          <label htmlFor="select-category">Select category</label>
          <select name="category" id="category">
            <option value="default">--</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="bills">Bills</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default App
