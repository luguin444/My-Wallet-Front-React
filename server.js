const path = require('path');
const express = require('express');

const app = express();

//se der 404, cai no index.html
app.use(express.static(path.join(__dirname, 'public'), {fallthrough: false} )); 

app.listen(process.env.PORT);