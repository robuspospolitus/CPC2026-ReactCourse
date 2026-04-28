import { useState } from "react";

function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  console.log(title + " " + amount);

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      id: Math.random().toString(),
      title: title,
      amount: +amount,
    };
    
    // Resetowanie pól
    setTitle('');
    setAmount('');
  };

  return (
    <div className="container">
      <h1>Menedżer wydatków</h1>
      <form onSubmit={(event) => submitHandler(event)}>
        <input type="text" placeholder="Nazwa wydatku" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="number" placeholder="Kwota" value={amount} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">Dodaj wydatek</button>
      </form>
    </div>
  )
}

export default App
