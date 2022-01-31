const fs = require('fs');
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Aimdek');
});

app.get('/api/users', (req, res) => {
    const users = readingFile();
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    const users = readingFile();
    const user = users.find(user => (user.id === parseInt(req.params.id)));
    if (user) res.send(user);
    else res.send('No user Found');
});

app.post('/api/users', (req, res) => {
    const { error } = validateData(req.body);
    if (error) {
        res.status(400).send(error);
        return;
    }
    let users = readingFile();
    users.push(req.body);
    const updatedObjectList = JSON.stringify(users, null, 2);
    writingFile(updatedObjectList);
    res.send(updatedObjectList);
});

app.put('/api/users/:id', (req, res) => {
    const { error } = validateData(req.body);
    if (error) {
        res.status(400).send(error);
        return;
    }
    let users = readingFile();
    let findUserIndex = users.findIndex((user) => user.id === parseInt(req.body.id));
    if (findUserIndex != -1) {
        users[findUserIndex] = req.body;
    }
    const updatedObjectList = JSON.stringify(users, null, 2);
    writingFile(updatedObjectList);
    res.send(updatedObjectList);
});

app.delete('/api/users/:id', (req, res) => {

});

function validateData(user) {
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        password: Joi.string().min(6).required(),
        gender: Joi.string().required(),
        birthdate: Joi.string().required(),
        age: Joi.number().required(),
        country: Joi.string().required(),
        phone: Joi.string().required(),
    });

    return schema.validate(user);
}

function readingFile() {
    return JSON.parse(fs.readFileSync('./users.json'));
}

function writingFile(updatedFile) {
    fs.writeFileSync('./users.json', updatedFile, (err) => {
        if (err) console.log(err)
    });
}

const port = 3000;
app.listen(port, () => console.log(`Listening to port ${port} ....`));