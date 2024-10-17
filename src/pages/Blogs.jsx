// src/pages/Blogs.jsx
import React, { useState } from 'react';
import { addHabitRecord, getGraphUrl } from '../apiService';
import './Blogs.css';

const Blogs = () => {
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAddHabit = async () => {
    setError('');
    setSuccess('');
    if (!date || !quantity) {
      setError('Por favor ingresa la fecha y la cantidad.');
      return;
    }

    try {
      await addHabitRecord(date.replace(/-/g, ''), quantity);
      setSuccess('Hábito registrado con éxito.');
      setDate('');
      setQuantity('');
    } catch (err) {
      setError('Error al registrar el hábito.');
    }
  };

  return (
    <div className="container">
      <h1>Seguimiento de Hábitos</h1>
      <div className="habit-form">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Fecha (YYYY-MM-DD)"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Cantidad"
        />
        <button onClick={handleAddHabit}>Registrar Hábito</button>
      </div>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <iframe
        src={getGraphUrl()}
        width="100%"
        height="400"
        frameBorder="0"
        title="Habit Graph"
      ></iframe>
    </div>
  );
};

export default Blogs;
