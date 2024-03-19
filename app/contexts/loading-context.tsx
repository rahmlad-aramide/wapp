'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';
interface LoadingContextType {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({children}: {children: ReactNode}){
    const [loading, setLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>{children}</LoadingContext.Provider>
    )
}

export function useLoading() {
    const loading = useContext(LoadingContext);
    if(loading === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider")
    }
    return loading
}