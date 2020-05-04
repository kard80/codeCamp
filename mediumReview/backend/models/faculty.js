module.exports = (sequelize, DataTypes) => {
    const faculty = sequelize.define('faculty',{
        name: {
            type: DataTypes.STRING
        }
    })
    faculty.associate = models => {
        faculty.hasMany(models.student)
    }


    return faculty
}