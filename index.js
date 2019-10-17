const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./app/routes'));

app.listen(3000, () => {
    console.log("Server running at 3000");
});