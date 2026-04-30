import { useContext } from 'react';
import { ExpenseItem } from './ExpenseItem';
import { ExpenseContext } from '../context/ExpenseContext';

export default function ExpensesList() {
    // Wyciągamy z kontekstu Expenses i przypisujemy jej wartości do nowej zmiennej o nazwie Items
    const { expenses: items } = useContext(ExpenseContext);

    // Jeśli tablica wydatków jest pusta, to zwróć napis
    if(items.length === 0) return (
        <h2 className="expenses-list_fallback">
            Brak wydatków. Ciesz się oszczędnościami!
        </h2>
    )

    // Iteracja po każdym elemencie tablice items. Expense to jeden obiekt, a key to jest index
    // Przypominam, że każdy obiekt w pętli musi mieć swoje key
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

