import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */ //Disable no-console rule.

const port = 3000;
const app = express();

// Enable gzip
app.use(compression());
// Tell node server to use static files (from /dist)
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email":"tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email":"lle.tina@gmail.com"}
  ]);
});

app.listen(port, (err) => {
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
