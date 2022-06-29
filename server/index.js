const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/jackson', (req, res) =>
{
    res.sendFile(path.join(__dirname, '../jackson.html'));
});

const SERVER_PORT = process.env.PORT || 4005;

app.listen(SERVER_PORT, () =>
{
    console.log(`server running on port ${SERVER_PORT}`)
});