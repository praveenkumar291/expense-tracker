import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Income from './components/Income';
import Transaction from './components/Transaction';
import { GlobalProvider } from './context/GlobelState';





function App() {
  return (

<GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
         <Income/>
<Transaction/>

        <AddTransaction/>

      </div>
      </GlobalProvider>
  );
}

export default App;
