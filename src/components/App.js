import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransaction] = useState([])
  useEffect (()=> {
    fetch ("http://localhost:8000/transactions")
    .then((response) => response.json())
    .then((transaction) => setTransaction(transaction))
  },[])

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
