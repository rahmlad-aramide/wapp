'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';
interface QueryContextType {
    queries: string;
    setQueries: Dispatch<SetStateAction<string>>;
}
const QueryContext = createContext<QueryContextType | undefined>(undefined);

export function QueryProvider({children}: {children: ReactNode}){
    const [queries, setQueries] = useState('');

    return (
        <QueryContext.Provider value={{queries, setQueries}}>{children}</QueryContext.Provider>
    )
}

export function useQueries() {
    const queries = useContext(QueryContext);
    if(queries === undefined) {
        throw new Error("useQueries must be used within a QueryProvider")
    }
    return queries
}