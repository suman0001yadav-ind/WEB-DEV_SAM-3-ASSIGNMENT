
const express = require("express");

const app = express();

const PORT = 3000;

// Import logger middleware
const logger = require("./middleware/logger");

// Import student routes
const studentRoutes = require("./routes/studentRoutes");

// Middleware to read JSON data
app.use(express.json());

// Use our custom logger
app.use(logger);

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Student Management REST API"
    });
});

// Connect student routes
app.use("/students", studentRoutes);

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});