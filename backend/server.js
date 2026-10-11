const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos estáticos (puedes reemplazarlos por datos de tu banking-platform)
const datosEstaticos = [
  { id: 1, nombre: 'Cuenta Ahorros', saldo: 1500.50 },
  { id: 2, nombre: 'Cuenta Corriente', saldo: 3200.75 },
  { id: 3, nombre: 'Tarjeta Crédito', saldo: -450.00 }
];

// Ruta principal de la API
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from server!',
    data: datosEstaticos
  });
});

// Ruta de salud (opcional, buena práctica)
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Servidor Node corriendo en http://localhost:${PORT}`);
});