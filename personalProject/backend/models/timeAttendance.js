module.exports = (sequelize, DataTypes) => {
    const timeAttendance = sequelize.define('timeAttendance', {
        date: {
            type: DataTypes.DATE
        },
        clockIn: {
            type: DataTypes.STRING,
            timestamps: true
        },
        clockOut: {
            type: DataTypes.STRING,
            timestamps: true
        },
        workingTime: {
            type: DataTypes.INTEGER
        },
        Remark: {
            type: DataTypes.STRING
        }
    })
    leave.associate = models => {
        leave.hasOne(models.person, {foreignKey: "personId"})
    }

    return timeAttendance
}