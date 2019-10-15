const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes'));

app.listen(3000);