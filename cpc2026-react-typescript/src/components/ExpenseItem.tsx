import { useExpenseContext } from '../context/ExpenseContext';

interface ExpenseItemProps {
    id: number,
    title: string,
    amount: number
}
export function ExpenseItem({id, title, amount}:ExpenseItemProps) {
    // Pobieranie danych z naszego kontekstu 
    const { handleDeleteExpense: onDelete } = useExpenseContext();
    
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