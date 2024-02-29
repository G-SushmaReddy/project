const express = require('express');

const router = express.Router();
const FoodrequestController = require('../controllers/foodrequest');
// const { route } = require('./foodrequest');

const verifyToken = require('../middlewears/verifyToken');

router.post('/', verifyToken ,FoodrequestController.savedetails)
// router.get('/:id', FoodrequestController.getdetailsbyid)
router.get('/all/', verifyToken,FoodrequestController.getAll);
router.put('/:id', verifyToken, FoodrequestController.update);
router.get('/:id', FoodrequestController.getdetailsbyid)
router.delete('/:id', FoodrequestController.deletedetails)

module.exports = router;

