'use client'; // Add this at the top to indicate client-side code

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { realtimeDatabase } from "C:/Users/gerim/Desktop/carwash-main/carwash/firebase";
export default function Dashboard() {
  // State to hold form data
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  // State to store customer info
  const [customers, setCustomers] = useState([]);
  const [showChart, setShowChart] = useState(false); // Control when to show the chart

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = { name, number, date, time, message };
    setCustomers([...customers, newCustomer]);

    // Clear form
    setName("");
    setNumber("");
    setDate("");
    setTime("");
    setMessage("");
  };

  // Show chart when clicking on the Dashboard link
  const handleShowChart = () => {
    setShowChart(true);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">Sidebar</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              onClick={handleShowChart} // When clicked, show the chart
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Online appointments
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center px-4">
            <button className="text-gray-500 focus:outline-none focus:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <input
              className="mx-4 w-full border rounded-md px-4 py-2 pl-10 placeholder-slate-400 focus:ring focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center pr-4">
            <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Add Customer</h1>
          <form onSubmit={handleSubmit} className="p-8 w-full max-w-lg">
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Full Name *"
                required
                autoComplete="name"
              />
              <input
                type="text"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Phone Number *"
                required
              />
            </div>

            <div className="my-6 flex gap-4">
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                required
                autoComplete="off"
              />

              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                required
                autoComplete="off"
              />
            </div>

            <div>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols="30"
                rows="5"
                className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-500"
                placeholder="Message"
                autoComplete="off"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
              >
                Add Customer
              </button>
            </div>
          </form>
        </div>

        {/* Conditionally Render the Chart */}
        <div className="p-4">
          {showChart && (
            <div>
              <h2 className="text-2xl font-bold">Customer Information</h2>
              {customers.length === 0 ? (
                <p>No customer information available.</p>
              ) : (
                <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 border border-gray-300">Name</th>
                      <th className="px-4 py-2 border border-gray-300">Phone Number</th>
                      <th className="px-4 py-2 border border-gray-300">Date</th>
                      <th className="px-4 py-2 border border-gray-300">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer, index) => (
                      <tr key={index} className="bg-white">
                        <td className="px-4 py-2 border border-gray-300">{customer.name}</td>
                        <td className="px-4 py-2 border border-gray-300">{customer.number}</td>
                        <td className="px-4 py-2 border border-gray-300">{customer.date}</td>
                        <td className="px-4 py-2 border border-gray-300">{customer.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
