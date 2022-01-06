const router = require('express').Router();

router.use(require('./player'));
router.use(require('./root'));
router.use(require('./create'));

module.exports = router;