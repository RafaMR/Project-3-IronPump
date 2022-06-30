'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  bodyPart: {
    type: String,
    trim: true
  },
  target: {
    type: String,
    trim: true
  },
  gifUrl: {
    type: String,
    trim: true
  },
  // id: {
  //   type: String,
  //   trim: true
  // },
  equipment: {
    type: String,
    trim: true
  }
});

const Exercise = mongoose.model('Exercise', schema);

module.exports = Exercise;
