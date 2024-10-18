import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    mensaje: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      setResponseMessage('Error al enviar el formulario.');
    }
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
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default Contacto;

