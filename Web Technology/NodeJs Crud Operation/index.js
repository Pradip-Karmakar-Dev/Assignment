const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Aimdek');
});

app.get('/api/users', (req, res) => {

});

app.get('/api/users/:id', (req, res) => {

});

app.post('/api/users', (req, res) => {

});

app.put('/api/users/:id', (req, res) => {

});

app.delete('/api/users/:id', (req, res) => {

});