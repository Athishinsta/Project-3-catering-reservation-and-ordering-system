import React, { useState } from 'react';
import './Reservation.css'

function ReservationForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number, location, date, time, budget });
  };

  return (
    
    <div className='form-container'>
      <h2 className='header'>Reserve Catering</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label className='label'>Name :</label>
          <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label className='label'>Phone no :</label>
          <input className='input' type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
        </div>
        <div>
          <label className='label'>Location :</label>
          <input className='input' type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div>
          <label className='label'>Event Date :</label>
          <input className='input' type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label className='label'>Event Time :</label>
          <input className='input' type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <label className='label'>Budget :</label>
          <input className='input' type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
        </div>
        <button className='button1' type="submit">Submit Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;
