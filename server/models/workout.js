'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sets: [
    {
      exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true
      },
      repetitions: { type: Number },
      weight: { type: Number }
    }
  ]
});

const Workout = mongoose.model('Workout', schema);

module.exports = Workout;
