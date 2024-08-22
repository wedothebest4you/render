const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: [
      'http://127.0.0.1:5500',
      'https://78892980-gaoocj2lh-wedothebest4yous-projects.vercel.app',
    ],
    methods: 'GET,POST,PUT,DELETE,PATCH', // Allow these HTTP methods
    credentials: true,
  })
);

app.delete('/', (req, res) => {
  res.send('Preflight passed DELETE handler');
});

app.put('/', (req, res) => {
  res.send('Preflight passed PUT handler');
});

app.patch('/', (req, res) => {
  res.send('Preflight passed PATCH handler');
});

app.listen(3000, () => console.log('L@3000'));
