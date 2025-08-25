const express = require('express');
const pool = require('./db');

const app = express();
const PORT = 3000;

// Endpoint test DB
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, db_time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err.message });
  }
});

// Endpoint untuk ambil semua users
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.json({ success: true, users: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
