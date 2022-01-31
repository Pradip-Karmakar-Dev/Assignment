const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Aimdek');
});

app.get('/api/users', (req, res) => {
    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) console.log(err)
        else res.send(JSON.parse(data));
    });
});

app.get('/api/users/:id', (req, res) => {
    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        else {
            const users = JSON.parse(data);
            const user = users.find(user => (user.id === parseInt(req.params.id)));
            if (user) res.send(user);
            else res.send('No user Found');
        }
    });
});

app.post('/api/users', (req, res) => {

});

app.put('/api/users/:id', (req, res) => {

});

app.delete('/api/users/:id', (req, res) => {

});

const port = 3000;
app.listen(port, () => console.log(`Listening to port ${port} ....`));