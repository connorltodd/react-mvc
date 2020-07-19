const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connection = require('./config');

connection.connect(err => {
    if (err) throw err;
    console.log('App is successfully connected to the database')
});

app.use(express.json());



app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`App is listening at ${port}`)
})