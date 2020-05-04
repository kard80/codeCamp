module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('student', {
        name: {
            type: DataTypes.STRING
        }
    })

    student.associate = models => {
        student.belongsTo(models.faculty)
    }

    return student
}

