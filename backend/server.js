const express = require('express');
const config = require('./config/envConfig');
const connectToDatabase = require('./config/connectToDb');

const path = require('path');

const { v4: uuidV4 } = require('uuid');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const sessionStore = new MongoStore({
  uri: config.DB.URL,
  collection: 'sessions'
});

const server = express();

// The Middleware Layers

// The static folder (The client-side)
server.use(express.static(path.join(__dirname, '../dist/czWordGame')));

// The Parsing Layer
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// The Authentication and authorization layer
server.use(session({
  secret: config.APP.SECRET_KEY,
  genid: () =>  uuidV4(),
  saveUninitialized: false,
  resave: false,
  rolling: false,
  cookie: {
    httpOnly: false,
    sameSite: true,
    secure: false,
    expires: 24 * 60 * 60 * 1000
  },
  store: sessionStore,
}));

sessionStore.on('error', (error) => {
  console.error(error);
});

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
