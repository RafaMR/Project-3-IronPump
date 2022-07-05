const express = require('express');
const router = new express.Router();
const exerciseList = require('../data/exercise-list.json');
const bodyPartList = require('../data/body-part-list.json');
const Exercise = require('../models/exercise');
const { mongoose } = require('mongoose');

router.get('/search', (req, res, next) => {
  const { name, bodyPart } = req.query;
  Exercise.find({
    // If name is truthy, then search for exercises with that name.
    ...(name && { name: { $regex: new RegExp(name, 'i') } }),
    // If bodyPart is truthy, then search for exercises with that bodyPart.
    ...(bodyPart && { bodyPart })
  }).then((exercises) => {
    res.json({ exercises });
  });
});

router.get('/get-multiple-exercises', (req, res, next) => {
  // ids is supposed to be an array
  const { ids } = req.query;
  const objectIds = ids.split(',');

  Exercise.find({
    _id: {
      $in: objectIds
    }
  })
    .then((exercises) => res.json({ exercises }))
    .catch((err) => next(err));
});

router.get('/list', (req, res, next) => {
  Exercise.find((exercises) => {
    res.json({ exercises: exerciseList });
  });
});

router.get('/body-parts', (req, res, next) => {
  res.json({ bodyParts: bodyPartList });
});

router.get('/part/:partName', (req, res, next) => {
  // http://localhost:3010/exercise/part/back?page=2
  // skip the first 10
  // limit to 10 results
  // if page=2, skip is 10
  // if page=3, skip is 20
  // if page=4, skip is 30
  const { partName, page } = req.params;
  const LIMIT = 10;
  const SKIP = LIMIT * page - LIMIT;

  Exercise.find({ bodyPart: partName })
    .skip(SKIP)
    .limit(LIMIT)
    .then((exercises) => {
      console.log('EXERCISES', exercises);
      res.json({ exercises });
    });
});

router.get('/id/:id', (req, res, next) => {
  const { id } = req.params;
  Exercise.findById(id).then((exercise) => {
    res.json({ exercise });
    console.log(exercise);
  });
});

module.exports = router;
