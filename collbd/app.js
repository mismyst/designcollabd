// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.1.1';
const port = 3004;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server and listen on the defined port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
