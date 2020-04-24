module.exports = (sequelize, DataTypes) => {
    const position = sequelize.define('position', {
        position: {
            type: DataTypes.STRING
        }
    })
    position.associate = models => {
        position.hasMany(models.person, {foreignKey: "personId"})

        department.belongTo(models.position, {foreignKey: "departmentId"})
    }

    return position
}