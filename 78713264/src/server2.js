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
  let response;
  if (req.session?.somecookie) {
    response = 'Same cookie: A cookie received and the same sent to client';
  } else {
    req.session.somecookie = 'cookie text';
    response = 'New cookie: A new cookie created and sent to the client';
  }
  res.send(response);
});

app.listen(4000, () => {
  console.log(`L@4000`);
});
