const fs = require('fs');
const express = require('express');
const path = require('path');

// Set the path to the port.json file
const portFilePath = path.join(__dirname, 'port.json');

// Check if the port.json file exists for showing purposes
if (fs.existsSync(portFilePath)) {
  console.log('port.json file found! Here is the content for display:');

  // Read and display the content of port.json (for show)
  fs.readFile(portFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading port.json:', err);
      return;
    }

    const config = JSON.parse(data);
    const port = config.port;

    // Show port info for demonstration
    console.log(`port.json contains port: ${port}`);

    // Create the Express app and start the server
    const app = express();
    
    app.get('/', (req, res) => {
      res.send('Hello, world!');
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  });
} else {
  console.log('port.json file not found, using default port 3000.');
  // Default port if the file doesn't exist
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  const defaultPort = 3000;
  app.listen(defaultPort, () => {
    console.log(`Server is running on http://localhost:${defaultPort}`);
  });
}
