const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membreSchema = new Schema({
        nom: {
            type: String,
            required: true
        },

        prenom: {
            type: String,
            required: true
        },

        poste: {
            type: String,
            enum: ["Gardien", "Défenseur central","Défenseur latéral","Milieu offensif","Milieu défensif","Avant-centre","Ailier","Non-attribué"],
            default: "Non-attribué"
        },

        emplacement: {
            type: String,
            enum: ["Gauche","Droite","Centré"],
            default: "Centré"
        },

        status: {
            type: String,
            enum: ["Disponible","Indisponible","Blessé","Révision","En prêt"],
            default: "Révision"
        },
    },
    {
        timestamps: true,
    }
);

const Membres = mongoose.model('Membres', membreSchema);

module.exports = Membres;