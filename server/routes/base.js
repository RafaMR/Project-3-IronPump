'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('./../middleware/route-guard');
const ImageKit = require('imagekit');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

router.get('/imagekit-authentication', (req, res, next) => {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_API_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_API_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
  });

  const authenticationParameters = imagekit.getAuthenticationParameters();

  res.json(authenticationParameters);
});

module.exports = router;
