module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define('student', {
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        number_phone: {
            type: DataTypes.STRING(10)
        },
    },
        {
            timestamps: false,
            tableName: "student"
        }
    )

    return student
}