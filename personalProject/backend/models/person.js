module.exports = (sequelize, DataTypes) => {
    const person = sequelize.define('person', {
        name: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
        },
        gender: {
            type: DataTypes.STRING
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY
        },
        martialStatus: {
            type: DataTypes.STRING
        },
        nationality: {
            type: DataTypes.STRING
        },
        IDNumber: {
            type: DataTypes.INTEGER
        },
        contactNumber: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        },
        employeeCode: {
            type: DataTypes.INTEGER,
        },
        workingStartDate: {
            type: DataTypes.DATE
        },
        probationEndDate: {
            type: DataTypes.DATE
        },
        jobTitle: {
            type: DataTypes.STRING
        },
        // department: {
        //     type: DataTypes.STRING
        // },
        employeeType: {
            type: DataTypes.STRING
        },
        employeeStatus: {
            type: DataTypes.STRING
        },
        manager: {
            type: DataTypes.STRING
        },
        resignationDate: {
            type: DataTypes.DATE
        },
        resignationReason: {
            type: DataTypes.STRING
        },
        taxID: {
            type: DataTypes.INTEGER
        },
        accountNO: {
            type: DataTypes.INTEGER
        },
        accountName: {
            type: DataTypes.STRING
        },
        compensationType: {
            type: DataTypes.STRING
        },
        salary: {
            type: DataTypes.INTEGER
        }
    })
    person.associate = models => {
        person.hasMany(models.leave, {foreignKey: "personId"})
        person.hasMany(models.timeAttendance, {foreignKey: "personId"})
        
        person.belongsTo(models.position, {foreignKey: "positionId"})
        person.belongsTo(models.department)
    }

    return person
}
