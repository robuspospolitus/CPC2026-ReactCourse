import { createContext } from "react";
import { useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([
        { id: 1, title: 'Kawa', amount: 18 },
        { id: 2, title: 'Bilet MZK', amount: 4.40 }
    ]);
    const handleAddExpense = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };
    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter(exp => exp.id !== id));
    }

    return (
        <ExpenseContext.Provider value={{ expenses, handleAddExpense, handleDeleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
}