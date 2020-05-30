module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            notNull: true      
        },
        password: {
            type: DataTypes.STRING,
            notNull: true
        },
    })

    return user
}