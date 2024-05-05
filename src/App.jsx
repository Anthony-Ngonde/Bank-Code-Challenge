import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar onSearch={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;