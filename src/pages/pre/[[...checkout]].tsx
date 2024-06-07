import React, { useState } from 'react';

const ShippingForm = () => {
  const [shipTo, setShipTo] = useState('Hong Kong');
  const [category, setCategory] = useState('Furniture');
  const [price, setPrice] = useState('302.99');
  const [currency, setCurrency] = useState('USD');
  const [taxesPaidBy, setTaxesPaidBy] = useState('Sender');
  const [dimensions, setDimensions] = useState({ length: 75, width: 43, height: 67 });
  const [weight, setWeight] = useState("3.6");
  const [courier, setCourier] = useState('FedEx Int.');

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Shipping</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-gray-700">Ship to:</label>
                      <select
                          title='select'
              value={shipTo}
              onChange={(e) => setShipTo(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option>Hong Kong</option>
              <option>USA</option>
              <option>Canada</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Category:</label>
                      <select
                          title='select'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option>Furniture</option>
              <option>Electronics</option>
              <option>Clothing</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-gray-700">{"Item's retail price:"}</label>
            <div className="flex">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded-l"
              />
                          <select
                              title='select'
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="p-2 border rounded-r"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Taxes & Duties paid by:</label>
            <div className="flex">
              <button
                onClick={() => setTaxesPaidBy('Sender')}
                className={`flex-1 p-2 border ${taxesPaidBy === 'Sender' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
              >
                Sender
              </button>
              <button
                onClick={() => setTaxesPaidBy('Receiver')}
                className={`flex-1 p-2 border ${taxesPaidBy === 'Receiver' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
              >
                Receiver
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-gray-700">Package Dimensions (cm):</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={dimensions.length}
                onChange={(e) => setDimensions({ ...dimensions, length: e.target.value } as never)}
                className="w-1/3 p-2 border rounded"
              />
              <input
                type="number"
                value={dimensions.width}
                onChange={(e) => setDimensions({ ...dimensions, width: e.target.value } as never)}
                className="w-1/3 p-2 border rounded"
              />
              <input
                type="number"
                value={dimensions.height}
                onChange={(e) => setDimensions({ ...dimensions, height: e.target.value } as never)}
                className="w-1/3 p-2 border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Package Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Choose your courier:</label>
          <div className="flex space-x-4">
            <div
              onClick={() => setCourier('FedEx Int.')}
              className={`flex-1 p-4 border rounded cursor-pointer ${courier === 'FedEx Int.' ? 'bg-green-100 border-green-500' : 'bg-white'}`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  checked={courier === 'FedEx Int.'}
                  onChange={() => setCourier('FedEx Int.')}
                  className="mr-2"
                />
                <span>FedEx Int.</span>
              </div>
              <p className="text-sm text-gray-500">You can still count on the day and time your shipment arrives in 2-3 Days shipping</p>
            </div>
            <div
              onClick={() => setCourier('DHL Express')}
              className={`flex-1 p-4 border rounded cursor-pointer ${courier === 'DHL Express' ? 'bg-green-100 border-green-500' : 'bg-white'}`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  checked={courier === 'DHL Express'}
                  onChange={() => setCourier('DHL Express')}
                  className="mr-2"
                />
                <span>DHL Express</span>
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-700">
              <p>Shipping: $59.99</p>
              <p>Tax: $5.00</p>
              <p>Insurance: $12.00</p>
              <p className="text-green-500 font-bold">Total: $76.99</p>
            </div>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Next Step</button>
          </div>
        </div>
      </div>
  );
};

export default ShippingForm;