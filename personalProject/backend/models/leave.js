module.exports = (sequelize, DataTypes) => {
    const leave = sequelize.define('leave', {
        type: {
            type: DataTypes.STRING
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        },
        approver: {
            type: DataTypes.STRING
        },
        reason: {
            type: DataTypes.STRING
        },
        file: {
            type: DataTypes.STRING
        }
    })
    leave.associate = models => {
        leave.belongsTo(models.person, {foreignKey: "personId"})
    }

    return leave
}