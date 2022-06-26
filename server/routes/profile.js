const express = require('express');
const User = require('../models/user');

const routeGuard = require('./../middleware/route-guard');

const router = new express.Router();

router.get('/search', (req, res, next) => {
  const { term } = req.query;
  /*
  MongoDB $regex operator documentation
  https://www.mongodb.com/docs/manual/reference/operator/query/regex/
  */
  User.find({ name: { $regex: new RegExp(term, 'i') } })
    .then((users) => {
      res.json({ profiles: users });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
