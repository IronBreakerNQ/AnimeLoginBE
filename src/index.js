const express = require('express');

const app = express();
const port = 3001;

//db config
const db = require ('./app/config/db');
db.connect();


//router
// const route = require('./app/routers');
// route(app);


app.listen(port, () => {
  console.log(`${port}`)
})