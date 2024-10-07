import React, { useState, useEffect } from 'react';

const DebtPayoffTracker: React.FC = () => {
  const [totalDebt, setTotalDebt] = useState(250000);
  const [currentDebt, setCurrentDebt] = useState(250000);
  const [payment, setPayment] = useState('');

  useEffect(() => {
    // TODO: Fetch debt data from Supabase
  }, []);

  const handlePayment = () => {
    const paymentAmount = parseFloat(payment);
    if (!isNaN(paymentAmount) && paymentAmount > 0) {
      const newDebt = Math.max(currentDebt - paymentAmount, 0);
      setCurrentDebt(newDebt);
      setPayment('');
      // TODO: Update debt in Supabase
    }
  };

  const progressPercentage = ((totalDebt - currentDebt) / totalDebt) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Debt Payoff Tracker</h2>
      <div className="mb-4">
        <p className="text-lg">Total Debt: ${totalDebt.toLocaleString()}</p>
        <p className="text-lg">Current Debt: ${currentDebt.toLocaleString()}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter payment amount"
        />
        <button
          onClick={handlePayment}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default DebtPayoffTracker;