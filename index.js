require('dotenv').config(); // HARUS di baris paling atas

const express = require('express');
const app = express();
const pool = require('./db'); // pool sekarang pakai process.env

app.use(express.json());

// endpoint /users
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json({ success: true, users: result.rows, success: true });
  } catch (err) {
    console.error('DB error:', err); // penting untuk debugging
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = app;
