// src/apiService.js
const API_BASE_URL = 'https://pixe.la/v1/users/bobydev';
const TOKEN = 'cby-A7kI7OEviBw0HkLpRixmyIuEBYibR9jZVmWUyP0';

// Crear un nuevo registro de hábito
export async function addHabitRecord(date, quantity) {
  const response = await fetch(`${API_BASE_URL}/graphs/habit-graph`, {
    method: 'POST',
    headers: {
      'X-USER-TOKEN': TOKEN,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date: date,
      quantity: quantity
    })
  });

  if (!response.ok) {
    throw new Error('Error al registrar el hábito');
  }

  return await response.json();
}

// Obtener la URL del gráfico
export function getGraphUrl() {
  return `${API_BASE_URL}/graphs/habit-graph.html`;
}
