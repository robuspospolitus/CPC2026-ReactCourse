import { useState, useContext } from "react";
import ExpensesList from "./components/ExpensesList";
import { ExpenseContext } from './context/ExpenseContext';

export default function App() {
  console.log("Rerender App")
  return (
    <div className="container">
      <h1>Menedżer wydatków</h1>
      <ExpenseForm />
      <ExpensesList />
    </div>
  )
}

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const { handleAddExpense } = useContext(ExpenseContext);

  // Wysłanie formularza
  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      id: Math.random().toString(),
      title: title,
      amount: amount,
    };
    handleAddExpense(newExpense);

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