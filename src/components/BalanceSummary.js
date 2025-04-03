import React, { useState, useEffect } from 'react';
import AddTransaction from './AddTransaction';
import '../index.css';

const BalanceSystem = () => {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage when component mounts
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
  };

  // Function to calculate total income
  const calculateTotalIncome = () => {
    return transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  // Function to calculate total expenses
  const calculateTotalExpenses = () => {
    return transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  // Function to calculate the balance
  const calculateBalance = () => {
    return calculateTotalIncome() - calculateTotalExpenses();
  };

  return (
    <section id="BalanceSummary">
      <div>
        <h1>Balance Summary</h1>

        {/* Display the balance */}
        <div className="balance-section">
          <h2>Balance: ${calculateBalance().toFixed(2)}</h2>
          <p>Total Income: ${calculateTotalIncome().toFixed(2)}</p>
          <p>Total Expenses: ${calculateTotalExpenses().toFixed(2)}</p>
        </div>

        {/* Pass addTransaction as a prop */}
        <AddTransaction addTransaction={addTransaction} />

        {/* List of Transactions */}
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.description} - ${transaction.amount} ({transaction.type}) - {transaction.date}
            </li>
          ))}
        </ul>
      </div>

      <footer id="footer">
        <div className="footer-container">
          <p id="p1">Stay Connected</p>
          <div className="social-links">
            <a href="@Hikmetulahh">Telegram</a>
            <a href="hikkoo1">Instagram</a>
            <a href="linkedin.com/in/hikma-oumer/">LinkedIn</a>
          </div>
          <p>Email: <a href="lovehiku2@gmail.com">support@expensetracker.com</a></p>
          <p>Phone: 251-928-774-322</p>
          <div className="legal-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default BalanceSystem;
