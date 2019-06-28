const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('card', { prompt : "Wh'at what what" , hint: "Think about who?", colors });
});

module.exports = router;
