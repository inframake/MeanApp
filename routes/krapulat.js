const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Krapula = require ('../models/krapula');
const mongoose = require ('mongoose');
const req = require('express/lib/request');
const res = require('express/lib/response');


router.post('/hangover', (req, res, next) => {
    let uusiKrapula = new Krapula({
        olo1: req.body.olo1,
        olo2: req.body.olo2,
        olo3: req.body.olo3,
        olo4: req.body.olo4,
        olo5: req.body.olo5,
        olo6: req.body.olo6
    });

    Krapula.addKrapula(uusiKrapula, (err, krapula) => {
        if (err) {
          res.json({ success: false, msg: 'Väärät arvot' });
        } else {
          res.json({ success: true, msg: 'Tiedot tallennettu' });
        }
      });
});

router.get('/hangover', (req, res, next) => {
  res.json({
    krapula: {
      _id: req.krapula._id,
      olo1: req.krapula.olo1,
        olo2: req.krapula.olo2,
        olo3: req.krapula.olo3,
        olo4: req.krapula.olo4,
        olo5: req.krapula.olo5,
        olo6: req.krapula.olo6
    }
  });
});




module.exports = router;
