const pool = require('./db');

// Contoh query
pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error(err);
  else console.log(res.rows);
});
