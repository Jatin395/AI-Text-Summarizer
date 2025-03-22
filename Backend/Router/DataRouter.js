const express = require('express');
const DataRouter = express.Router();
const { generateSummary } = require('../Controller/DataController');

DataRouter.post('/generateContent', generateSummary);

module.exports = DataRouter