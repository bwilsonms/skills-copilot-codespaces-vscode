// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse JSON data from POST request
app.use(bodyParser.json());

// Create endpoint for POST request
app.post('/', (req, res) => {
    const { postId, content } = req.body;

    // Check if post has comments
    if (!comments[postId]) {
        comments[postId] = [];
    }

    // Add new comment to post
    comments[postId].push({ id: comments.length, content });

    // Send status code 201
    res.status(201).send(comments[postId]);
});

// Create endpoint for GET request
app.get('/', (req, res) => {
    res.send(comments);
});

// Create web server
app.listen(port, () => {
    console.log(`Comments service listening on port ${port}`);
});

// Create comments array
const comments = [];
