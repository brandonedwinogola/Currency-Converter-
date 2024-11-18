import React from "react";
import "./App.css";
import CurrencyConverter from "./components/currency-convertor";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col items-center justify-center font-sans">
      <div className="container bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Currency Converter
        </h1>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
