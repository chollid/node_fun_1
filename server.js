const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {

    // lodash
    const num = _.random(0, 20)
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello World');
    })

    greet();
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // find the path user is requesting
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 208;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 208;
            break;
        case '/about-me':
            //redirect
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    // send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data); 
        }
    });
});


// Listen for requests
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});


