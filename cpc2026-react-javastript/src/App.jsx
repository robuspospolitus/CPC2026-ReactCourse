import { useState } from "react";

function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  console.log(title + " " + amount);
  return (
    <div className="container">
      <h1>Menedżer wydatków</h1>
      <form>
        <input type="text" placeholder="Nazwa wydatku" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="number" placeholder="Kwota" value={amount} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">Dodaj wydatek</button>
      </form>
    </div>
  )
}

export default App
