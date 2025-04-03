import React, { useState } from 'react';
import '../index.css';

const AddTransaction = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: check if all fields are filled out
    if (!amount || !description || !date) {
      alert('Please fill out all fields');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      category,
      date,
      type,
    };

    // Call addTransaction from props to update the state in the parent component
    if (addTransaction && typeof addTransaction === 'function') {
      addTransaction(newTransaction);
    } else {
      console.error('addTransaction is not a function');
    }

    // Clear the form fields after submission
    setAmount('');
    setDescription('');
    setCategory('Food');
    setDate('');
    setType('expense');
  };

  return (
    <section id="AddTransaction">
      <div className="add-transaction">
        <h3>Add New Transaction</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Salary">Salary</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>

          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Transaction Type:</label>
            <label>
              <input
                type="radio"
                name="type"
                value="expense"
                checked={type === "expense"}
                onChange={() => setType("expense")}
              />
              Expense
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="income"
                checked={type === "income"}
                onChange={() => setType("income")}
              />
              Income
            </label>
          </div>

          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </section>
  );
};

export default AddTransaction;
