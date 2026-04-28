export function ExpenseItem({id, title, amount, onDelete}) {
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