const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evenementSchemat = new Schema({
        date: {
            type: Date,
            required: true
        },

        start: {
            type: String,
            required: true
        },

        end: {
            type: String,
            required: true
        },

        evenements: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const Evenement = mongoose.model('Evenement', evenementSchemat);

module.exports = Evenement;