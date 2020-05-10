const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const db = require('../../models')

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
    secretOrKey: 'signKey'
}

const jwtStrategy = new Strategy(option, async (payload, done) => {
    const user = db.user.findOne({where: {id: payload.id}})

    if(user) {
        done(null, user)
    }else {
        done(null, false)
    }
})

passport.use('jwt-authentication', jwtStrategy)