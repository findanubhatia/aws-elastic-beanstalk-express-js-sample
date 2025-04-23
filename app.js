const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to K21 Academy project one - Implementing CI/CD DevOps Pipeline!- its just done!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
