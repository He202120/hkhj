const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  role: {
    type: String,
    enum: ['postulant', 'player'],
    default: 'postulant'
  },
  goals: {
    type: Number,
    required: false
  },
  assists: {
    type: Number,
    required: false
  },
  minutesPlayed: {
    type: Number,
    required: false
  },
  yellowCards: {
    type: Number,
    required: false
  },
  redCards: {
    type: Number,
    required: false
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;