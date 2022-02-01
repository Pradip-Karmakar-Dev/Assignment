const users = require('./routes/users');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/', home);
app.use('/api/users/', users);

const port = 3000;
app.listen(port, () => console.log(`Listening to port ${port} ....`));