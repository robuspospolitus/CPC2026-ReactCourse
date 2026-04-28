import { useContext } from 'react';
import { ExpenseItem } from './ExpenseItem';
import { ExpenseContext } from '../context/ExpenseContext';

export default function ExpensesList() {
    const { expenses: items } = useContext(ExpenseContext);

    if(items.length === 0) return (
        <h2 className="expenses-list_fallback">
            Brak wydatków. Ciesz się oszczędnościami!
        </h2>
    )

    return (
        <ul>
            {items.map((expense, key) => (
                <ExpenseItem 
                    key={key}
                    id={expense.id} 
                    title={expense.title} 
                    amount={expense.amount}
                />
            ))}
        </ul>
    );
}

