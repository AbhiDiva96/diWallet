'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Transaction {
  amount: number;
  name: string;
  type: string;
}

export default function Dashboard() {
  const [formData, setFormData] = useState<Transaction>({
    amount: 0,
    name: '',
    type: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [walletAmount, setWalletAmount] = useState<number>(0);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchWalletAmount = async () => {
      try {
        const response = await axios.get('/api/transactions');
        setWalletAmount(response.data.totalTransations);
      } catch (error) {
        setError('Failed to fetch wallet amount');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWalletAmount(); // Fetch wallet amount on component load
  }, [session, status]);

  const handleTypeChange = (type: string) => {
    setFormData((prevData) => ({
      ...prevData,
      type,
    }));
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'amount' ? Number(value) : value, // Ensure amount is converted to number
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('/api', formData); // formData has the correct number type for amount

      if (response.status === 200) {
        setSuccess(response.data.message);
      }

      // Update wallet amount after successful transaction
      // You can re-fetch wallet amount if needed

      // Reset form data
      setFormData({
        amount: 0,
        name: '',
        type: 'income',
      });

      
    } catch (error: any) {
      setError(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
 
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex flex-col items-center dark:bg-gray-900 justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-8 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Total Wallet Amount</h2>
        <p className={`text-3xl ${walletAmount < 0 ? 'text-red-500' : 'text-green-500'} font-bold mt-2`}>
          {`₹${walletAmount}`}
        </p>
      </div>

      {/* Transaction Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md dark:bg-gray-700/20">
        <h1 className="text-2xl font-semibold text-center text-gray-700 dark:text-white mb-6">Add Transaction</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-white">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              value={formData.amount === 0 ? "" : formData.amount}
              onChange={handleChange}
               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 appearance-none custom-number-input"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
              Transaction Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex gap-4 py-4">
              <button
                type="button"
                onClick={() => handleTypeChange('income')}
                className={`flex-1 px-4 py-2 rounded-md focus:outline-none ${
                  formData.type === 'income' ? 'bg-green-500 text-white' : 'border border-green-500 bg-green-400/20 text-green-500'
                }`}
              >
                Income
              </button>
              <button
                type="button"
                onClick={() => handleTypeChange('expense')}
                className={`flex-1 px-4 py-2 rounded-md focus:outline-none ${
                  formData.type === 'expense' ? 'bg-red-500 text-white' : 'border border-orange-500 bg-orange-400/20 text-orange-500'
                }`}
              >
                Expense
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Adding...' : 'Add Transaction'}
          </button>
        </form>
      </div>
    </div>
  );
}
