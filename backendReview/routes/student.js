const express = require('express');
const router = express.Router();
const passport = require('passport')
const studentRouter = require('../controller/studentController')


const auth = passport.authenticate("jwt-authentication", {session: false});

router.get('/', studentRouter.getAllStudents)
router.get('/:id', studentRouter.getStudentById)
router.post('/', studentRouter.createNewStudent)
router.put('/:id', studentRouter.editStudentById)
router.delete("/:id", auth, studentRouter.deleteStudentById)

module.exports = router