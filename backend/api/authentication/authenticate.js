function authenticate(req, res, next) {
  let currentSessionID = req.header('Cookie');
  currentSessionID = currentSessionID.slice(currentSessionID.indexOf('A') + 1, currentSessionID.lastIndexOf('.'));
  if (currentSessionID === req.session.id) {
    next();
  } else {
    res.status(401).json({
      success: false,
      msg: 'You have to sign in to access this page!'
    });
  }
};

module.exports = { authenticate };
