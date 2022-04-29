const express = require('express');
const bodyParser = require('body-parser');

// Start Mongo Database
require('./db');

// Start Server
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.listen(PORT);
