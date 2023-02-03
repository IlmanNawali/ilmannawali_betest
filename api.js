const express     = require('express');
require('dotenv').config();
var bodyParser    = require('body-parser')
const app         = express();
const cors        = require('cors');
// parse application/json
app.use(bodyParser.json())
app.use(cors());
var login         = require('./service/login');
var userPost      = require('./service/userPost');
var userGet       = require('./service/userGet');
var userPut       = require('./service/userPut');
var userDelete    = require('./service/userDelete');
var userDetail    = require('./service/userDetail');

var chekUser      = require('./middleware/chekUser');
app.use(express.json());
app.post('/user', chekUser,userPost)
app.get('/user',chekUser, userGet)
app.put('/user', chekUser, userPut)
app.get('/user/:id', chekUser, userDetail);
app.delete('/user/:id', chekUser, userDelete)
app.get('/login', login)
app.listen(process.env.PORT_API, () => {
  console.log(`Example app listening on port ${process.env.PORT_API}`)
})