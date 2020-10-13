const express = require('express');
const app = express();
const portNum = 3000;

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(process.env.PORT || portNum, () => console.log(`Test Tracking API listening at http://localhost:${portNum}`));