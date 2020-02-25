const express = require('express');
const passport = require('passport');
const { establishAuthStrategy } = require('./api/authentication/jwtStrategy');
const config = require('./config/envConfig');
const connectToDatabase = require('./config/connectToDb');
const path = require('path');

const strategy = establishAuthStrategy().generate();
const server = express();

// The Middleware Layers

// The function that loads the whole dist folder, aka the application after it's built, as a static folder to make the UI and the loading times faster
server.use(express.static(path.join(__dirname, '../dist/czWordGame')));

// The Authentication and authorization layer
passport.use(strategy);
server.use(passport.initialize());

// The Parsing Layer
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// The router
server.use('/', require('./api/routes'));

// The function responsible for viewing the index.html folder
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/czWordGame/index.html'));
})


// Connections
connectToDatabase(config.DB.URL);
server.listen(config.APP.PORT, () => {
  console.log(`Server is running on ${config.APP.PORT}`);
});
