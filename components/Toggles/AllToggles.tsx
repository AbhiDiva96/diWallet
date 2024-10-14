'use client'

import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { Transaction } from '@/types/types';

export const  AllToggle = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [history, setHistory] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { status, data: session } = useSession()

  const togglePopup = () => setIsOpen(!isOpen)

  useEffect(() => {
    const getTotalTransaction = async () => {
      if (status === 'authenticated') {
        setIsLoading(true)
        setError(null)
        try {
          const response = await axios.get('/api/transactions/history')
          setHistory(response.data.accountHistory)
        } catch (error) {
          console.error('Failed to fetch transaction history:', error)
          setError('Failed to load transaction history. Please try again.')
        } finally {
          setIsLoading(false)
        }
      }
    }

    getTotalTransaction()
  }, [status, session])

  return (

     <div className="relative  flex items-center justify-center pb-4">
      <div className='flex flex-col'>
            <button
                onClick={togglePopup}
                className="p-4 dark:bg-gray-800 border border-slate-400/20 rounded dark:text-white "
            >
                <ReceiptLongTwoToneIcon/>
            </button>
           <span className='flex justify-center dark:text-white '>History</span>
        </div> 

    {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-md mx-auto relative">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close popup"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
            <div className="p-6">
              <h2 className="text-2xl dark:text-white font-bold mb-4">Transaction History</h2>
              <div className="overflow-y-auto max-h-[70vh]">
                {isLoading ? (
                  <p className="text-center dark:text-gray-300">Loading transactions...</p>
                ) : error ? (
                  <p className="text-center text-red-500 dark:text-red-400">{error}</p>
                ) : history.length === 0 ? (
                  <p className="text-center dark:text-gray-300">No transactions found.</p>
                ) : (
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {history.slice(0).reverse().map((transaction) => (
                      <li key={transaction.id} className="py-4 px-2">
                        <div className="flex justify-between">
                          <div className=''>
                            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{transaction.transactionName}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(transaction.createdAt).toLocaleString()}</p>
                          </div>
                          <div className='flex justify-center'>
                          <p className={`text-sm font-semibold ${transaction.type === 'income' ? 'text-green-500'  : 'text-red-500' }`}>
                          {transaction.type=== 'income' ? `+₹${transaction.amount.toFixed(2)}` :  `-₹${transaction.amount.toFixed(2)}`}
                          </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
  }