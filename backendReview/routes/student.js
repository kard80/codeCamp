const express = require('express');
const router = express.Router();
const studentRouter = require('../controller/studentController')

router.get('/', studentRouter.getAllStudents)
router.get('/:id', studentRouter.getStudentById)
router.post('/', studentRouter.createNewStudent)
router.put('/:id', studentRouter.editStudentById)
router.delete("/:id", studentRouter.deleteStudentById)

module.exports = router