const express = require('express');

const router = express.Router();
const PostController = require('../controllers/post');

const verifyToken = require('../middlewears/verifyToken');


//router to davedetails
router.post('/', verifyToken ,PostController.savedetails)
//router to get
router.get('/all/', verifyToken ,PostController.getdetails)
//router to getdeytsils by id
router.get('/:id', verifyToken ,PostController.getdetailsbyid)
//router to update
router.put('/:id', verifyToken ,PostController.update)

//router to delete
router.delete('/:id', verifyToken ,PostController.deletepost)


// router.get('/all/all' ,PostController.up)

module.exports = router;
