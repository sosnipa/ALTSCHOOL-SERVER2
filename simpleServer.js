const http = require("http");
const url = require("url");

// Sample data for demonstration
let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

// Function to handle GET requests for '/books' endpoint
function handleGetBooks(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(books));
}

// Function to handle PUT requests for '/books' endpoint
function handlePutBooks(req, res) {
  // Here, you would parse the request body and update the books data accordingly
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Books data updated successfully" }));
}

// Function to handle DELETE requests for '/books' endpoint
function handleDeleteBooks(req, res) {
  books = []; // Clear books data
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "All books deleted successfully" }));
}

// Function to handle GET requests for '/books/author' endpoint
function handleGetAuthor(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Get author details" }));
}

// Function to handle POST requests for '/books/author' endpoint
function handlePostAuthor(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "New author created successfully" }));
}

// Function to handle PUT requests for '/books/author' endpoint
function handlePutAuthor(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Author details updated successfully" }));
}

// Create HTTP server
const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  // Route requests based on path and method
  if (reqUrl.pathname === "/books") {
    if (req.method === "GET") {
      handleGetBooks(req, res);
    } else if (req.method === "PUT") {
      handlePutBooks(req, res);
    } else if (req.method === "DELETE") {
      handleDeleteBooks(req, res);
    }
  } else if (reqUrl.pathname === "/books/author") {
    if (req.method === "GET") {
      handleGetAuthor(req, res);
    } else if (req.method === "POST") {
      handlePostAuthor(req, res);
    } else if (req.method === "PUT") {
      handlePutAuthor(req, res);
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
