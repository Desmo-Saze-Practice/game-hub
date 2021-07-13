const express = require('express');

let router = express.Router();

const games = require('../games.json');

router.use((req, res, next) => {
    res.locals.games = games;
    next();
});

const log = require('./log');
router.use(log);

router.get('/', (req, res) => {
    res.locals.games = games;
    res.render('index');
});

// Dynamic route
router.get('/game/:gameName', (req, res, next) => {
    const paramsGameName = req.params.gameName;
    const currentGame = games.find(game => game.name === paramsGameName);

    if (!currentGame) {
        console.log('hello not found');
        next();
        return;
    }
    res.render(paramsGameName, currentGame);
});


router.use('', (req, res) => {
    res.status(404).render('404');
});

module.exports = router;