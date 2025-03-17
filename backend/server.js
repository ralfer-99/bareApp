const app = require('./app'); // No change needed here
const connectDB = require('./src/db/db'); // Updated path

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});