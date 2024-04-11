//Variable lié à la table de models des membres

const Membres = require("../models/membres.models");


//Renvoie la liste des membres
const getMembres = async (req, res) => {

    try {
        const membreget = await Membres.find({});
        res.status(200).json(membreget)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const setMembres = async (req, res) => {

    try {
        const membrepost = await Membres.create(req.body);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getMembres,
    setMembres
};