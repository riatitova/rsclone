const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const boards = require('./routes/boards');

const path = __dirname + '/views/';
const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path));



app.use('/users', users);
app.use('/boards', boards);

app.listen(port, function () {
  console.log(`Example app listening on ${port}!`);
});
