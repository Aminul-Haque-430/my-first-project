// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all route for frontend routing
if (fs.existsSync(path.join(publicPath, 'index.html'))) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));