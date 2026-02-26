// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve frontend
app.use(express.static('public'));

// Simple API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});