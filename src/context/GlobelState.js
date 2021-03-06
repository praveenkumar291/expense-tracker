import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//intialstate state
const initialState = {
  transactions: [
    
  ]
}


//create context

export const GlobalContext = createContext(initialState);


//provider components

export const GlobalProvider = ({children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {

    dispatch({

      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };
  const addTransaction = (tra) => {

    dispatch({

      type: 'ADD_TRANSACTION',
      payload: tra,
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>

    {children}


  </GlobalContext.Provider>);
}
