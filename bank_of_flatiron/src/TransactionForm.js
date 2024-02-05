import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new transaction object
    const newTransaction = {
      description,
      amount
    };
    // Pass the new transaction to the parent component
    onAddTransaction(newTransaction);
    console.log(onAddTransaction);
    // Reset form fields
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit ={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
