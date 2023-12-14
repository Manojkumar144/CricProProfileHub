const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
// Set up views directory
app.set('views', 'views');

// Serve static files from the public directory
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Use the player route
app.use('/', require('./routes/player'));

// Sync the Sequelize models with the database
sequelize.sync()
  .then(() => {
    console.log('Database and tables synchronized');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing with database:', error);
  });