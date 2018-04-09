const express = require('express');

// we're going to use the router
const router = express.Router();

// include the logger lib and the ability to parse the body
const morgan = require('morgan');
const bodyParser = require('body-parser');

// bring in the BlogPosts object to make it available
const {BlogPosts} = require('./models');

// instantiate the body parser and the express app
const jsonParser = bodyParser.json();
const app = express();

// add logging output
app.use(morgan('common'));

// Create some blog posts to start with
const blogpost1 = `
       The quick red fox jumped over the lazy brown dog.
`;
const blogpost2 = `
       Twas brillig and the slithy toves did gire and gimple in the wabe.
`;
const blogpost3 = `
       One bright day in the middle of the night, two dead boys got up to fight.
`;
BlogPosts.create("About foxes", blogpost1, "Ange")
BlogPosts.create("The Jabberwock", blogpost2, "Dee")
BlogPosts.create("The Backwards Rhyme", blogpost3, "Sue")

// React to GET command
app.get("/blog-posts", (req, res) => {
    res.json(BlogPosts.get());
});

// React to PUT command
app.put("/blog-posts/:id", jsonParser, (req, res) => {

});

// React to POST command
app.post("/blog-posts", jsonParser, (req, res) => {

});

// React to DELETE command
app.delete("/blog-posts/:id", (req, res) => {

});

// Listen
app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is Listening on port ${process.env.PORT || 8080}`);
});