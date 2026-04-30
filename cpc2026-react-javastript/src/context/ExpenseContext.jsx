import { createContext } from "react";
import { useState, useEffect } from "react";

// To jest nasz kontekst, do którego się odwołujemy
export const ExpenseContext = createContext();

// To jest Provider, czyli blok który opatula naszą aplikację.
// Nie można korzystać ze zmiennych kontextu poza jej Providerem
export const ExpenseProvider = ({ children }) => {
    // Nasza tablica wydatków. Sprawdza czy w przeglądarce jest już zapisane. Jeśli nie, to zwraca pustą tablicę
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem('expenses');
        return saved ? JSON.parse(saved) : [];
    });

    // Zapisuje do pamięci przeglądarki wydatki przy każdej jej zmianie (dependencies Array: [expenses])
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    // Handler dodawania do tablicy wydatków
    const handleAddExpense = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    // Handler usuwania z tablicy wydatków po ID
    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter(exp => exp.id !== id));
    }

    // Zwracamy nasz prowider, który zawiera dane, które chcemy przekazywać komponentom
    return (
        <ExpenseContext.Provider value={{ expenses, handleAddExpense, handleDeleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
}