module.exports = (sequelize, DataTypes) => {
    const person = sequelize.define('person', {
        name: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        dateOfBirth: {
            type: DataTypes.DATE
        },
        martialStatus: {
            type: DataTypes.STRING
        },
        nationality: {
            type: DataTypes.STRING
        },
        idNumber: {
            type: DataTypes.INTEGER
        },
        contactNumber: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        },
        workingStartDate: {
            type: DataTypes.DATE
        },
        probationEndDate: {
            type: DataTypes.Date
        },
        jobTitle: {
            type: DataTypes.STRING
        },
        employeeType: {
            type: DataTypes.STRING
        },
        employeeStatus: {
            type: DataTypes.STRING
        },
        manager: {
            type: DataTypes.STRING
        },
        resignDate: {
            type: DataTypes.DATE
        },
        resignReason: {
            type: DataTypes.STRING
        }
    })
    person.associate = models => {
        person.hasOne(models.department, {foreignKey: "departmentId"})
        person.hasOne(models.position, {foreignKey: "positionId"})

        leave.belongToMany(models.person, {foreignKey: "personId"})
        timeAttendance.belongToMany(models.person, {foreignKey: "personId"})
    }

    return person
}
