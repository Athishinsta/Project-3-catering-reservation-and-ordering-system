import React from 'react';
import './Ordersummary.css';

function OrderSummary({ order, reservation }) {
  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className='container'>
      <h2 className='head'>Order Summary</h2>
      <p className='form'><strong>Reservation for:</strong> {reservation.name}</p>
      <p className='form'><strong>Event Date:</strong> {reservation.date}</p>
      <p className='form'><strong>Event Time:</strong> {reservation.time}</p>
      <h3 className='head2'>Ordered Items</h3>
      <div className='head1'>
      <ul className='list'>
        {order.map((item, index) => (
          <li className='list1' key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      </div>
      <p className='total'><strong>Total:</strong> ${calculateTotal()}</p>
    </div>
  );
}

export default OrderSummary;
