const express = require("express");

//Variable du router d'expresse
const router = express.Router();

//Controllers
const {getEvenement} = require('../controllers/agenda.controller.js');

router.get('/Agenda', getEvenement);

module.exports = router;