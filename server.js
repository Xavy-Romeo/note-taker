// require express 
const express = require('express');
// create a port for our server
const PORT = process.env.PORT || 3111;
// routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// instantiate the server
const app = express();

// Express middleware
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);
// use htmlRoutes
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});