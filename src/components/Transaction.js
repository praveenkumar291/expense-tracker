import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobelState';
import Transactions from './Transactions';

const TransactionList = () => {
  const initialState  = useContext(GlobalContext);
  // console.log(initialState);


  return (
    <div>
        <h3>History</h3>
      <ul className="list">
        {initialState.transactions.map(tra =>(<Transactions key={tra.id} tra={tra}/>))}

      </ul>

    </div>
  )
}

export default TransactionList;
