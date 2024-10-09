

'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Transaction {
  userId: string;
  amount: number;
  name: string;
  type: string;
}

export default function Dashboard() {
  const [formData, setFormData] = useState<Transaction>({
    userId: '',
    amount: 0,
    name: '',
    type: 'income', // default type set to 'income'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [walletAmount, setWalletAmount] = useState<number>(0);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('/api/transaction', formData);
      setSuccess(response.data.message);

      // Update wallet amount after successful transaction
      fetchWalletAmount();

      // Reset form data
      setFormData({
        userId: '',
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

  // Fetch total wallet amount
  const fetchWalletAmount = async () => {
    try {
      const response = await axios.get('/api/transaction/walletAmount'); // Assuming you have this API for fetching wallet amount
      setWalletAmount(response.data.totalAmount);
    } catch (error) {
      console.error('Error fetching wallet amount', error);
    }
  };

  useEffect(() => {
    fetchWalletAmount(); // Fetch wallet amount on component load
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      {/* Total Wallet Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-8 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Total Wallet Amount</h2>
        <p className="text-3xl text-green-500 font-bold mt-2">
          ${walletAmount.toFixed(2)}
        </p>
      </div>

      {/* Transaction Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add Transaction</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Transaction Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Transaction Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Add Transaction'}
          </button>
        </form>
      </div>
    </div>
  );
}
