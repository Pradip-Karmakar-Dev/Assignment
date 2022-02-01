const express = require('express');
const router = express.Router();
const Joi = require('joi');
const fs = require('fs');

router.get('/', (req, res) => {
    const users = readingFile();
    res.send(users);
});

router.get('/:id', (req, res) => {
    const users = readingFile();
    const user = users.find(user => (user.id === parseInt(req.params.id)));
    if (!user) return res.status(404).send('No Such User found for given ID');
    res.send(user);
});

router.post('/', (req, res) => {
    const { error } = validateData(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let users = readingFile();
    let foundUserIndex = users.findIndex((user) => user.id === parseInt(req.body.id));
    if (foundUserIndex != -1) return res.status(400).send('User Already Exist.....');

    users.push(req.body);
    const updatedObjectList = JSON.stringify(users, null, 2);
    writingFile(updatedObjectList);
    res.send('User Added Succesfully.....');
});

router.put('/:id', (req, res) => {
    const { error } = validateData(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let users = readingFile();
    let foundUserIndex = users.findIndex((user) => user.id === parseInt(req.params.id));
    console.log(foundUserIndex);
    if (foundUserIndex == -1) return res.status(404).send('No Such User found for given ID');

    users[foundUserIndex] = req.body;
    const updatedObjectList = JSON.stringify(users, null, 2);
    writingFile(updatedObjectList);
    res.send('User Updated Successfully.....');
});

router.delete('/:id', (req, res) => {
    let users = readingFile();
    let foundUserIndex = users.findIndex((user) => user.id === parseInt(req.params.id));
    console.log(foundUserIndex);
    if (foundUserIndex == -1) return res.status(404).send('No Such User found for given ID');

    users.splice(foundUserIndex, 1);
    const updatedObjectList = JSON.stringify(users, null, 2);
    writingFile(updatedObjectList);
    res.send('User Deleted Successfully.....');
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

module.exports = router;