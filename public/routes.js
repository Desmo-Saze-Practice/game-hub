const express = require('express');

let router = express.Router();

// on stock les jeux dans les locals pour l'envoyer à nos vues
// router.use((req, res, next) => {
//     res.locals.gamesData = gamesData;
//     next();
// });

router.get('/', (req, res) => {
    res.render('index');
});

// Dynamic route
router.get('/game/:gameName', (req, res) => {
    const currentGame = req.params.gameName;

    res.locals.currentGame = currentGame;

    // currentGame = gamesData.find(game => game.name === currentGameName);

        res.render(currentGame);
});


router.use('',(req, res) => {
    res.render('404');
});

module.exports = router;