const express = require('express');
const router = express.Router();
const {profileController , newjwt} = require('../controllers');
const authMiddleware = require('../middlewares/authMiddleware');

// router.get('/profiles/token', newjwt.newToken);

router.post('/profiles',profileController.create);
router.get('/profiles/:id', profileController.getById);
router.put('/profiles/:id', profileController.update);
router.delete('/profiles/:id', profileController.delete);

module.exports = router;
