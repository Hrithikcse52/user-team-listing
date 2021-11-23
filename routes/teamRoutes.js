const { addTeam, getTeam } = require('../controller/teamController');

const router = require('express').Router();

router.post('/addTeam', addTeam);
router.get('/view', getTeam);

module.exports = router;
