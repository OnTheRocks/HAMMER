require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const path = require('path')

const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override')

const port = process.env.PORT || 3030;

const customers = require('./routes/api/Customers');
const materials = require('./routes/api/Materials');
const tickets = require('./routes/api/Tickets');

const initalizePassport = require('./passport-config');
initalizePassport(
  passport,
  email => users.find(user => user.email === email), 
  id => users.find(user => user.id === id)
)

const users = []

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(flash());
app.use(session( {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.js', { name: req.user.name})
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.js')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.js')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
  console.log(users);
})

app.delete('/logOut', (req, res) => {
  req.logOut()
  res.redirect('./login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/') 
  }
  next()
}

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const DB = process.env.DB;

app.use(routes);

app.use('/api/customers', customers);
app.use('/api/materials', materials);
app.use('/api/tickets', tickets);

//---Registration/Login Routes -----------


//-------------- Connect to Mongo ----------------
mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));
  
app.listen(port, () => console.log(`🌎 => API Server started on port ${port}`));