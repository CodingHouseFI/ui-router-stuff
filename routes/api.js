'use strict';

const express = require('express');

let router = express.Router();

//  GET /api/samurai

router.get('/samurai', (req, res) => {
  let samurai = ['samurai 1', 'samurai 2', 'samurai 3'];

  res.send(samurai);
});

module.exports = router;
