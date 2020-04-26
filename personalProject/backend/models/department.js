module.exports = (sequelize, DataTypes) => {
    const department = sequelize.define('department', {
        department: {
            type: DataTypes.STRING
        }
    })
    department.associate = models => {
        department.hasMany(models.position, {foreignKey: "positionId"})
        department.hasMany(models.person, {foreignKey: "personId"})
    }

    return department
}
