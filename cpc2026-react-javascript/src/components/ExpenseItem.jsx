import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";

export function ExpenseItem({id, title, amount}) {
    // Pobieranie danych z naszego kontekstu 
    const { handleDeleteExpense: onDelete } = useContext(ExpenseContext);
    
    // Kod JSX
    return (
        <li className="expense-item">
            <div>
                <h2>{title}</h2>
                <p>{amount} PLN</p>
            </div>
            {/* Po kliknięciu w przycisk USUŃ odpal funkcję onDelete, przekazując jej id. Funkcję tą znajdziesz w src/context/ExpenseContext.jsx */}
            <button onClick={() => onDelete(id)} className="delete-btn">
                Usuń
            </button>
        </li>
    );
}