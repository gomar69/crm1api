const { Pool } = require('pg');

const pool = new Pool({
  host: 'host.docker.internal', // akses DB lokal dari Docker
  port: 5432,
  user: 'postgres',
  password: '12345',
  database: 'crm',
});

module.exports = pool;
