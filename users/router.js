const express = require('express');
const passport = require('passport');
const jsonParser = require('body-parser').json();
const router = express.Router();
const { BasicStrategy } = require('passport-http');
const { Users } = require('./models');

router.use(jsonParser);

module.exports = { router };