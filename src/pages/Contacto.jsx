import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nombre completo:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </label>
        <label>
          Apellidos:
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </label>
        <label>
          Correo:
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;

