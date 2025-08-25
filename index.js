require('dotenv').config(); // paling atas
const express = require('express');
const app = express();
const pool = require('./db'); // pakai process.env

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json({ success: true, users: result.rows });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = app;
