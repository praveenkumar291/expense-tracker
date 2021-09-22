import React, { useContext }from 'react'
import { GlobalContext } from '../context/GlobelState';


const Transactions = ({ tra }) => {
  const initialState = useContext(GlobalContext);
  const {deleteTransaction} = useContext(GlobalContext)

  const sign = tra.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={tra.amount < 0 ? 'minus' : 'plus' }>
        {tra.text}<span>{sign}${Math.abs(tra.amount)}</span><button onClick={()=>deleteTransaction(tra.id)} className="delete-btn">x</button>
        </li>
    </div>
  )
}

export default Transactions;
