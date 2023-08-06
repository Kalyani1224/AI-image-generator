// bringing express
const express = require('express');
const {generateImage} = require('../controllers/openaiController');
const router = express.Router();

// ultimately its going to be /openai/image
router.post('/generateimage', generateImage);
    

// then we want to export that
module.exports = router;