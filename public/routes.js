const express = require('express');

let router = express.Router();

const games = require('../games.json');

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
        console.log('first 404');
        res.status(404).render('404');
        return;
    }

    res.render(paramsGameName, currentGame);
});


router.use('', (req, res) => {
    res.render('404');
});

module.exports = router;