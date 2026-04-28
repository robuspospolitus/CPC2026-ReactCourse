import { useState } from "react";

export default function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Kawa', amount: 18 },
    { id: 2, title: 'Bilet MPK', amount: 4.40 }
  ]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="container">
      <h1>Menedżer wydatków</h1>
      <ExpenseForm onAddExpense={handleAddExpense}/>
    </div>
  )
}

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  // Wysłanie formularza
  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      id: Math.random().toString(),
      title: title,
      amount: amount,
    };
    onAddExpense(newExpense);

    // Resetowanie pól formularza
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <input type="text" placeholder="Nazwa wydatku" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="number" placeholder="Kwota" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <button type="submit">Dodaj wydatek</button>
    </form>
  )
}