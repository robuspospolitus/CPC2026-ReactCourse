import { createContext } from "react";
import { useState, useEffect, useContext } from "react";

// Tworzymy typ wydatku
export type ExpenseType = {
    id: number,
    title: string,
    amount: number
}
// Typ i interface to prawie to samo, ale typ ma szersze zastosowania
interface IExpenseContext {
    expenses: ExpenseType[];
    handleAddExpense: (expense: ExpenseType) => void;
    handleDeleteExpense: (id: number) => void;
}

// Tworzymy nowy Hook, aby móc się odwoływać do kontekstu, ponieważ obecnie jest <IExpenseContext | null> 
// Pozwala to uniknąć błędów oraz od teraz nie musimy importować useContext i ExpenseContext
// Wystarczy, że importujemy tylko tą funkcję i z niej wyciągniemy zmienne
export const useExpenseContext = () => {
    const context = useContext(ExpenseContext);
    if (!context) {
        throw new Error("useExpenseContext must be used within ExpenseProvider");
    }
    return context;
};

// To jest nasz kontekst, do którego się odwołujemy
const ExpenseContext = createContext<IExpenseContext | null>(null);

// To jest Provider, czyli blok który opatula naszą aplikację.
// Nie można korzystać ze zmiennych kontextu poza jej Providerem
export const ExpenseProvider = ({ children }:{children: React.ReactNode}) => {
    // Nasza tablica wydatków. Sprawdza czy w przeglądarce jest już zapisane. Jeśli nie, to zwraca pustą tablicę
    const [expenses, setExpenses] = useState<ExpenseType[]>(() => {
        const saved = localStorage.getItem('expenses');
        return saved ? JSON.parse(saved) : [];
    });

    // Zapisuje do pamięci przeglądarki wydatki przy każdej jej zmianie (dependencies Array: [expenses])
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    // Handler dodawania do tablicy wydatków
    const handleAddExpense = (expense: ExpenseType) => {
        setExpenses((prevExpenses: ExpenseType[]) => [expense, ...prevExpenses]);
    };

    // Handler usuwania z tablicy wydatków po ID
    const handleDeleteExpense = (id:number) => {
        setExpenses(expenses.filter((exp:ExpenseType) => exp.id !== id));
    }

    // Zwracamy nasz prowider, który zawiera dane, które chcemy przekazywać komponentom
    return (
        <ExpenseContext.Provider value={{ expenses, handleAddExpense, handleDeleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
}