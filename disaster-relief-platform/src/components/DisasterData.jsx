import React from 'react';

const DisasterData = () => {
  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Disaster Data</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-xl">Disaster Overview</h2>
        <ul className="mt-2">
          <li className="border-b py-2">Earthquake in Region A</li>
          <li className="border-b py-2">Flood in Region B</li>
          <li className="border-b py-2">Storm in Region C</li>
        </ul>
      </div>
    </div>
  );
};

export default DisasterData;
