function App() {
  
  return (
    <div className="container">
      <h1>Menedżer wydatków</h1>
      <form>
        <input type="text" placeholder="Nazwa wydatku"/>
        <input type="number" placeholder="Kwota"/>
        <button type="submit">Dodaj wydatek</button>
      </form>
    </div>
  )
}

export default App
