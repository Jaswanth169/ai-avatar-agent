const app = require('./app');  // Import the app from app.js

const PORT = process.env.PORT || 80;  // Use port 80 or the port defined in the environment variables

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
