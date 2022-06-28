const express = require('express');
const router = new express.Router();
const exerciseList = require('../data/exercise-list.json');
const bodyPartList = require('../data/body-part-list.json');
const Exercise = require('../models/exercise');

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

router.get('/list', (req, res, next) => {
  Exercise.find((exercises) => {
    res.json({ exercises });
  });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Exercise.findById(id, (exercise) => {
    res.json({ exercise });
  });
});

router.get('/body-parts', (req, res, next) => {
  res.json({ bodyParts: bodyPartList });
});

router.get('/:partName', (req, res, next) => {
  const { partName } = req.params;
  Exercise.find({ bodyPart: partName }, (exercises) => {
    res.json({ exercises });
  });
});

module.exports = router;
