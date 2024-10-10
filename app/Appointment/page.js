'use client'; // Add this at the top to indicate client-side code

import { useState, useEffect, useRef } from 'react'; // Add useEffect and useRef
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions
import { firestore } from '../../firebase'; // Correct path to your firebase.js

import Header from '../../components/headerr'; // Update the path if necessary
import Footer from '../../components/footer'; // Update the path if necessary

export default function AppointmentForm() {
  const formRef = useRef(null); // Create a ref for the form

  // Scroll to form on page load
  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the form
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Form field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const generateTimeSlots = (startHour, startMinute, endHour, endMinute) => {
    const times = [];
    let currentTime = new Date();
    currentTime.setHours(startHour, startMinute, 0, 0); 

    const endTime = new Date();
    endTime.setHours(endHour, endMinute, 0, 0); 

    while (currentTime <= endTime) {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${(hours % 12 || 12)}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
      times.push(formattedTime);
      currentTime.setMinutes(currentTime.getMinutes() + 30); 
    }

    return times;
  };

  const timeSlots = generateTimeSlots(8, 30, 20, 30);

  const getNext7Days = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);

      const month = String(nextDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(nextDate.getDate()).padStart(2, '0');
      const year = nextDate.getFullYear();

      const formattedDate = `${month}/${day}/${year}`;
      dates.push(formattedDate);
    }
    return dates;
  };

  const availableDates = getNext7Days();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(firestore, 'appointments'), {
        name,
        email,
        date,
        time,
        message,
        createdAt: new Date()
      });

      alert('Appointment booked successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
    }

    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setMessage('');
  };

  return (
    <>
      <Header />

      {/* Form container with ref */}
      <div ref={formRef} className="mx-4 sm:mx-10 md:mx-14 mt-10 mb-20 border-2 border-blue-400 pt-4 rounded-lg">
        <div className="mt-10 text-center font-bold">Contact Us</div>
        <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
        <form onSubmit={handleSubmit} className="p-8">
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
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              required
              autoComplete="off"
            >
              <option className="font-semibold text-slate-300" value="">
                Select Date
              </option>
              {availableDates.map((availableDate, index) => (
                <option key={index} value={availableDate}>
                  {availableDate}
                </option>
              ))}
            </select>

            <select
              name="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
