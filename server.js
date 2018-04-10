const express = require('express');

// include the logger lib 
const morgan = require('morgan');

// bring in the BlogRouter object to make it available
const blogRouter = require('./blogRouter');

// instantiate the express app
const app = express();

// add logging output
app.use(morgan('common'));

app.use(express.static('public'));

// React to GET command
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// when requests come into `/blog-posts`,
// we'll route them to the express
// router instance we've imported. Remember,
// this router instance acts as modular, mini-express apps.
app.use('/blog-posts', blogRouter);

// Listen
app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is Listening on port ${process.env.PORT || 8080}`);
});