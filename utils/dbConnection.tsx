import mysql from 'mysql';

// Connection configuration
const connection = mysql.createConnection({
  host: '10.75.32.125',
  user: 'root',
  password: 'Hta123P',
  database: 'sgu'
});

// Connect to the database
connection.connect((error: any) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
    return;
  }
  console.log('Connected to MySQL database');
});
