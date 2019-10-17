const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public/dist/public')));
app.use(bodyparser.json());

require('./server/config/database.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => { console.log('listening at port 8000')});