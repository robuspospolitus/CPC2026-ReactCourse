import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";

export function ExpenseItem({id, title, amount}) {
    const { handleDeleteExpense: onDelete } = useContext(ExpenseContext);
    return (
        <li className="expense-item">
            <div>
                <h2>{title}</h2>
                <p>{amount} PLN</p>
            </div>
            <button onClick={() => onDelete(id)} className="delete-btn">
                Usuń
            </button>
        </li>
    );
}