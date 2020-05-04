const db = require('../models')

const getAllStudents = async (req, res) => {
    const student = await db.student.findAll();

    res.send(student)
}
const getStudentById = async (req, res) => {
    const studentId = Number(req.params.id);
    const targetStudent = await db.student.findOne({where: {id: studentId}})

    if (targetStudent) {
        res.send(targetStudent);
      } else {
        res.status(404).send({ message: "student not found" });
      }
    };
    
const createNewStudent = async (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const numberPhone = req.body.number;

    const newStudent = await db.student.create({
        name: name,
        age: age,
        number_phone: numberPhone
    })

    res.status(201).send(newStudent)
}
const editStudentById = async (req, res) => {
    const studentId = req.params.id;
    const name = req.body.name;
    const age = Number(req.body.age);
    const numberPhone = req.body.number;
    await db.student.update({
        name: name,
        age: age,
        number_phone: numberPhone
    },
    {
        where: {id: studentId}
    })

    res.status(200).send(`message: ${studentId} has been updated`)
}
const deleteStudentById = async (req, res) => {
    const targetId = req.params.id;
     await db.student.destroy({where: {id: targetId}})

    res.status(200).send(`${targetId} has been deleted`)
}

module.exports = {
    getAllStudents,
    getStudentById,
    createNewStudent,
    editStudentById,
    deleteStudentById
}