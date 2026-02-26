// server.js
const express = require('express');
const path = require('path');
const app = express();

// Use Railway-provided port or fallback to 3000
const PORT = process.env.PORT || 3000;

// Middleware to serve frontend static files
// Make sure your frontend files are inside a folder named 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Root route to check if server is live
app.get('/', (req, res) => {
  res.send('App is live!');
});

// Simple API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Optional: catch-all route for frontend routing (if using React/Vue/etc.)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});