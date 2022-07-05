const express = require('express');
const router = new express.Router();
const routeGuard = require('./../middleware/route-guard');
const Workout = require('../models/workout');

// GET to '/workout/search' - Allows user to search for workouts.

router.get('/search', routeGuard, (req, res) => {
  const query = req.query;
  const { term } = req.query;
  Workout.find({ name: { $regex: new RegExp(term, 'i') } })
    .populate('owner')
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET - '/workout/all' - Loads all available workouts.
router.get('/all', (req, res, next) => {
  Workout.find()
    .then((workouts) => {
      res.json({ workouts });
    })
    .catch((err) => {
      next(err);
    });
});

// GET - '/workout/:id' - Loads single workout.

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Workout.findById(id)
    .populate('exercises.exercise')
    .populate('owner')
    .then((workout) => {
      console.log('WORKOUT!', workout, workout.exercises[0].exercise.name);
      res.json({ workout });
    })
    .catch((err) => {
      next(err);
    });
});

// PATCH - '/workout/:id' - Allows user to edit wokout.

router.patch('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const owner = req.user._id;
  const exercises = req.exercise;
  const sets = req.sets;

  Workout.findOneAndUpdate(
    { _id: id, owner },
    { exercises },
    { sets },
    { new: true }
  )
    .then((workout) => {
      res.json({ workout });
    })
    .catch((err) => {
      next(err);
    });
});

// POST - '/workout' - Allows user to create workout.

router.post('/', routeGuard, (req, res, next) => {
  const owner = req.user._id;
  const { exercises, name, bodyPart } = req.body;

  // exercises is supposed to be an array, where each item represents an object containing: exercise, set and reps
  /*
  [
    {
      exercise: {
        name: '',
        gif: ''
      },
      set: 2,
      repetitions: 2
    },
    ...
  ];

  */
  Workout.create({ owner, exercises, name, bodyPart })
    .then((workout) => {
      res.json({ workout });
    })
    .catch((err) => {
      next(err);
    });
});

// DELETE to '/workout/:id' - Allows user to delete workout.

router.delete('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const owner = req.user._id;

  Workout.findOneAndDelete({ _id: id, owner })
    .then(() => {
      res.json({});
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
