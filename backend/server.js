const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');  // To handle CORS

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use(cors());

const db = mysql.createConnection({
  host: 'demo-app.cteyg62m88pk.ap-south-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'August2023$$',
  database: 'demo-app'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log('Data fetched successfully');
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
