const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/profiles',authMiddleware,profileController.create);
router.get('/profiles/:id',authMiddleware, profileController.getById);
router.put('/profiles/:id',authMiddleware, profileController.update);
router.delete('/profiles/:id',authMiddleware, profileController.delete);

module.exports = router;
