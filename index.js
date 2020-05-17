const express = require('express');

const app = express();


app.use('/', (req, res, next) => {
    res.send('ici on est en guerre ');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});