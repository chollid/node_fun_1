const express = require('express');
const app = express();

// register view engine
app.set('view engine', 'ejs');

// change views folder location
// app.set('views', 'myviews');

// listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    // set header content type - res.setHeader('Content-Type', 'text/html');
    // sets status code - res.statusCode = 200;
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blog', (req, res) => {
    res.render('about', { title: 'Blog' });
});

app.get('/blog/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// redirects
app.get('/about-us', (req, res) => {
    res.render('about', { title: 'About' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});