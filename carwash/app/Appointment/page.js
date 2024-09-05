'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Header from '../../components/headerr'; // Update the path if necessary
import Footer from '../../components/footer';

const stripePromise = loadStripe('your-publishable-key');

// Helper function to generate time slots
const generateTimeSlots = (start, end) => {
  const timeSlots = [];
  let current = start;

  while (current <= end) {
    const hour = current % 12 || 12;
    const suffix = current >= 12 ? 'PM' : 'AM';
    const timeString = `${hour}:00 ${suffix}`;
    timeSlots.push(timeString);
    current++;
  }

  return timeSlots;
};

export default function AppointmentForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;

    try {
      // Create a session in the backend (replace this with your backend endpoint)
      const { data: sessionId } = await axios.post('/api/create-checkout-session', {
        date,
        time,
        deposit: 10, // $10 deposit
      });

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error('Stripe error:', error);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  // Generate time slots from 9 AM to 9 PM
  const timeSlots = generateTimeSlots(9, 21);

  return (
    <>
      {/* Add Header at the top */}
      <Header />

      <div className="mx-4 sm:mx-10 md:mx-14 mt-10 mb-20 border-2 border-blue-400 pt-4 rounded-lg">
        <div className="mt-10 text-center font-bold">Contact Us</div>
        <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
        <form onSubmit={handleSubmit} className="p-8">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Full Name *"
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Email *"
              required
              autoComplete="email"
            />
          </div>

          <div className="my-6 flex gap-4">
            <select
              name="date"
              id="date"
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              autoComplete="off"
            >
              <option className="font-semibold text-slate-300" value="">
                Select Date
              </option>
              {/* Add more date options dynamically */}
            </select>

            <select
              name="time"
              id="time"
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              autoComplete="off"
            >
              <option className="font-semibold text-slate-300" value="">
                Select Time
              </option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
              placeholder="Message"
              autoComplete="off"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
            >
              Book Appointment and Pay $10 Deposit
            </button>
          </div>
        </form>
      </div>
      <Footer />

    </>
  );
}
