import React, { useState } from 'react';
import ReservationForm from './components/Reservation';
import Menu from './components/Menu';
import OrderSummary from './components/Ordersummary';
import Login from './components/Login'
import './App.css';

function App() {
  const [reservation, setReservation] = useState(null);
  const [order, setOrder] = useState([]);
  const [login, setLogin] = useState(false);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  const handleLoginSubmit = (loginDetails) => {
    setLogin(true);
  }

  const handleReservationForm = (reservationDetails) => {
    setReservation(reservationDetails);
    setReservationSubmitted(true);
  };

  const handleAddToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <div className="App">
      <div className='main'>
        <div className='left'>
          <h1>Food Spot</h1>
        </div>
        <div className='right'>
          <h5 className='head'>Home</h5>
          <h5 className='head'>About</h5>
          <h5 className='head'>Contact</h5>
        </div>
      </div>
      {!login ? (
        <Login onSubmit={handleLoginSubmit} />
      ) : (
        <>
          {! reservationSubmitted ?(
            <ReservationForm onSubmit={handleReservationForm} />
          ) : (
            <>
              <Menu onAddToOrder={handleAddToOrder} />
              <OrderSummary order={order} reservation={reservation} />
            </>
          )}         
        </>
      )}
  
      <div className='footer'>
        <h4>@ 2025 I love Food | All rights reserved</h4>
      </div>
    </div>

  );
}

export default App;
