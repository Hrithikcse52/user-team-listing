const { addUser, getUserAggreagate } = require('../controller/userController');

const router = require('express').Router();

router.post('/adduser', addUser);
router.get('/getAll', getUserAggreagate);

module.exports = router;
