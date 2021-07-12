const express = require('express');

let router = express.Router();

const games = require('../games.json');

const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc')
// dayjs.extend(utc)

router.use((req, res, next) => {
    let logInfo = {};
    let now = dayjs().format();

    console.log(`[${now} ${req.ip}] ${req.originalUrl}`);
    next();
})

router.get('/', (req, res) => {
    res.locals.games = games;
    res.render('index');
});

// Dynamic route
router.get('/game/:gameName', (req, res) => {
    res.locals.games = games;

    const paramsGameName = req.params.gameName;
    const currentGame = games.find(game => game.name === paramsGameName);

    if (!currentGame) {
        res.status(404).render('404');
        console.error('game not found');
        return;
    }

    res.render(paramsGameName, currentGame);
});


router.use('', (req, res) => {
    res.render('404', {
        games
    });
});

module.exports = router;