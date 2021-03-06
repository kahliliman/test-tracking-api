const fs = require('fs')
const path = require('path')
const express = require('express');
const app = express();
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 5000;

let posts = require('./db/posts.json');

const filePath = path.resolve(__dirname, '/db/data.json')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/api/v1/posts', (req, res) => {
    res.status(200).json(posts);
});


app.post('/api/v1/posts', (req, res) => {
    return fs.writeFile(
        filePath,
        JSON.stringify(posts),
        'utf-8',
        () => res.status(201).json({ "success": true }))

});

app.listen(PORT, HOST, () => console.log(`Test Tracking API listening on ${PORT}`));