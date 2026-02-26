// server.js
const express = require('express');
const path = require('path');
const app = express();

// Railway port or fallback
const PORT = process.env.PORT || 3000;

// Serve frontend if exists
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Root route
app.get('/', (req, res) => {
  res.send('App is live!');
});

// Simple API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all only if index.html exists
const fs = require('fs');
if (fs.existsSync(path.join(publicPath, 'index.html'))) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));