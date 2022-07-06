import React, { useState, useEffect } from 'react';
import transactionsService from '../services/transactionService';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const getData = ()=> {
    transactionsService.getTransactions().then(res=>{
      setTransactions([...res.data]);
    });
  }
  useEffect(()=>{
    getData();
  }, []);

console.log(transactions);

  return (
    <div>Transactions</div>
  )
}

export default Transactions