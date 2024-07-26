const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();

app.set('trust proxy', 1);
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,

    cookie: { secure: true },
  })
);

app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.get('/cookie', (req, res, next) => {
  // let response;
  // const addinfo = `protocol : ${req.protocol}, host : ${
  //   req.hostname
  // }, origin : ${req.get('origin')}`;
  // if (req.session?.somecookie) {
  //   response = `Same cookie: A cookie received and the same sent to client - ${addinfo}`;
  // } else {
  //   req.session.somecookie = 'cookie text';
  //   response = `New cookie: A new cookie created and sent to the client - ${addinfo}`;
  // }
  // res.send(`<h1>${response}</h1>`);
  res.cookie('authToken', 'token', {
    maxAge: 24 * 60 * 60 * 1000, // 24 hrs
    httpOnly: true,
    secure: true, // Set to true if using HTTPS
    sameSite: 'None', // Adjust as needed ('Strict', 'Lax', 'None')
    path: '/',
  });
  res.json({
    success: true,
    message: 'Login successful',
  });
});

app.listen(4000, () => {
  console.log(`L@4000`);
});
