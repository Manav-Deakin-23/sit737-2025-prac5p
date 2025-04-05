const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: true }));

// Basic route for calculator operations
app.get('/', (req, res) => {
  const { a, b, op } = req.query;
  const x = parseFloat(a);
  const y = parseFloat(b);
  let result;

  switch (op) {
    case 'add':
      result = x + y;
      break;
    case 'sub':
      result = x - y;
      break;
    case 'mul':
      result = x * y;
      break;
    case 'div':
      result = y !== 0 ? x / y : 'Cannot divide by zero';
      break;
    default:
      result = 'Invalid operation';
  }

  res.send(`Result: ${result}`);
});

// Healthcheck route
app.get('/health', (req, res) => res.send('OK'));

app.listen(port, () => {
  console.log(`Calculator app running at http://localhost:${port}`);
});
