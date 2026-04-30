import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

export default function Stats() {
    // Pobranie wartości z kontekstu ExpenseContext
    const { expenses } = useContext(ExpenseContext);
    // Obliczenie sumy wszystkich wydatków
    const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

    return (
        // STATYSTYKI
        <div className="container stats-page">
            <h1>Podsumowanie finansowe</h1>
            <p className="total-badge">{total.toFixed(2)} PLN</p>
            <p>Liczba transakcji: {expenses.length}</p>
        </div>
    )
}