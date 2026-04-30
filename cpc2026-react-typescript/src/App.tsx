import { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import { useExpenseContext } from './context/ExpenseContext';

// STRONA GŁÓWNA
export default function App() {
  console.log("Rerender App")
  return (
    <div className="container">
      <h1>Menedżer wydatków</h1>

      {/* Aby użyć komponentu wystarczy go wpisać jak zwykły blok HTML */}
      {/* Układamy komponenty jak klocki */}
      <ExpenseForm />
      <ExpensesList />
    </div>
  )
}

// FORMULARZ
function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const { handleAddExpense } = useExpenseContext();

  // Wysłanie formularza
  const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
    // Zapobiegamy refreshowi strony po wysłaniu formularza
    event.preventDefault();

    // Tworzymy nowy wydatek
    const newExpense = {
      id: Math.random(),
      title: title,
      amount: Number(amount),
    };
    handleAddExpense(newExpense); // a tutaj go dodajemy do tablicy

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