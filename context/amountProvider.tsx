'use client'


import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface TotalAmountContextType {
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}

const TotalAmountContext = createContext<TotalAmountContextType | undefined>(undefined);

export const useTotalAmount = () => {
  const context = useContext(TotalAmountContext);
  if (context === undefined) {
    throw new Error('useTotalAmount must be used within a TotalAmountProvider');
  }
  return context;
};

interface TotalAmountProviderProps {
  children: ReactNode;
}

 

export const TotalAmountProvider: React.FC<TotalAmountProviderProps> = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
 const { data: session, status } = useSession();
 
   useEffect(() => {
    const fetchWalletAmount = async () => {
      try {
        const response = await axios.get('/api/transactions'); 
        setTimeout(() => {
            setTotalAmount(response.data.totalTransations);       
        },1000)
      } catch (error) {
            console.error()
    }
    };
    fetchWalletAmount(); // Fetch wallet amount on component load
  }, [session, status]);

    const contextValue = React.useMemo(() => ({ totalAmount, setTotalAmount }), [totalAmount]);

  return (
    <TotalAmountContext.Provider value={contextValue}>
      {children}
    </TotalAmountContext.Provider>
  );
};