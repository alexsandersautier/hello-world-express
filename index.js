const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({"message": "Olá mundo"});
});

app.listen(8080, () => {
    let data = new Date();
    console.log(`Server started at ${data}`);
});