import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="container">
      <h1>Bienvenido a Habit Tracker</h1>
      <p className="intro-text">Realiza un seguimiento de tus hábitos y mejora tu productividad.</p>
      <div className="card">
        <h2>Funciones principales</h2>
        <ul>
          <li>Registra tus hábitos</li>
          <li>Realiza un seguimiento diario</li>
          <li>Revisa tus estadísticas</li>
        </ul>
      </div>
    </div>
  );
}

export default Inicio;

