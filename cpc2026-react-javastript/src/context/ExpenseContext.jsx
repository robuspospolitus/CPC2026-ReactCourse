import { createContext } from "react";
import { useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem('expenses');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

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