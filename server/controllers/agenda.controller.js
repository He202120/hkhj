//Variable lié à la table de models des evenements
const Evenement = require("../models/evenement.models.js");

//Renvoie la liste des date et evenment
const getEvenement = async (req, res) => {

    try {
        const eventget = await Evenement.find({});
        res.status(200).json(eventget)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getEvenement
};