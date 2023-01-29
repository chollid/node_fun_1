const express = require('express');
const app = express();

// listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    // set header content type - res.setHeader('Content-Type', 'text/html');
    // sets status code - res.statusCode = 200;
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});