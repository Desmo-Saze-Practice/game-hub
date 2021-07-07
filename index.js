// APP 
const express = require('express');

const app = express();

// html engine renderer
let ejs = require('ejs');

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static('public'));

// port
const PORT = 3000;

const routes = require('./public/routes');

app.use(routes);

// games
const games = require('./games.json');

app.listen(PORT, () => {
    console.log(`app live on server http://localhost:${PORT}`);
})