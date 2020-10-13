const express = require('express');
const app = express();
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 5000;

let posts = require('./db/posts.json');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/api/v1/posts', (req, res) => {
    res.status(200).json(posts);
});


app.post('/api/v1/posts', (req, res) => {
    posts.push(req.body);
    res.status(201).json(req.body);
});

app.listen(PORT, HOST, () => console.log(`Test Tracking API listening on ${PORT}`));