const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Docker CI/CD!');
});

// Only start the server if this file is run directly (not imported)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app; // Export the app for testing