import React, { useState } from 'react';
import { useEffect } from 'react';
import TransactionsTable from './TransactionsTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';


function App(){
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(()=>{
    fetch(" http://localhost:3000/transactions")
    .then((resp)=>resp.json())
    .then ((data)=>{
      setTransactions(data)
    
    })
  })

  const handleAddTransaction = (newTransaction) => {
    // Update transactions state with the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    // Filter transactions based on description
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>FlatIron Bank</h1>
      <TransactionsTable transactions={filteredTransactions.length > 0 ? filteredTransactions : transactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};
export default App;
