export function ExpenseItem({id, title, amount}) {
    return (
        <li className="expense-item">
            <div>
                <h2>{title}</h2>
                <p>{amount} PLN</p>
            </div>
            <button className="delete-btn">
                Usuń
            </button>
        </li>
    );
}