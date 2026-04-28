import { ExpenseItem } from './ExpenseItem';

export default function ExpensesList({items, onDelete}) {
    if(items.length === 0) return (
        <h2 className="expenses-list_fallback">
            Brak wydatków. Ciesz się oszczędnościami!
        </h2>
    )
    console.log(items)
    return (
        <ul>
            {items.map((expense, key) => (
                <ExpenseItem 
                    key={key}
                    id={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    onDelete={onDelete}/>
            ))}
        </ul>
    );
}

