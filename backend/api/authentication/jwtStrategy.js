const jwtPassport = require('passport-jwt');
const config = require('../../config/envConfig');
const { getUserById } = require('../../database/logic/user-logic');


// Defining the JWT authentication strategy and exporting it to use it in the middleware authentication & authorization layer

function establishAuthStrategy() {
  const extractJwt = jwtPassport.ExtractJwt;
  const JwtStrategy = jwtPassport.Strategy;
  const jwtOptions = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.APP.SECRET_KEY
  };
  function generate() {
    const strategy = new JwtStrategy(jwtOptions, async (payload, next) => {
      try {
        const authorizedUser = await getUserById(payload.id);
        if (authorizedUser) {
          next(null, authorizedUser);
        } else {
          next(null, false);
        }
      } catch (error) {
        next(null, false);
      }
    });
    return strategy;
  }
  return { generate };
}

module.exports = { establishAuthStrategy };
