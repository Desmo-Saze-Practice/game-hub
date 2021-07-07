const express = require('express');

let router = express.Router();

// games
const games = require('../games.json');

router.get('/', (req, res) => {
    res.render('index', {
        games, 
        req
    });
});

// Dynamic route
router.get('/game/:myGame', (req, res) => {
    let myGame = req.params.myGame;

        res.render(myGame, {
            games,
            req
        });
});

module.exports = router;