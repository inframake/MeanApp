require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const session = require('express-session');

// Connect To Database
mongoose.connect(config.database);

// on connection
mongoose.connection.on('connected', () =>{
    console.log('Connected to database ' +config.database);
});

// on error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' +err)
});

const app = express();
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


const users = require('./routes/users');
const krapulat = require('./routes/krapulat');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/krapulat', krapulat);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});