var enumerate = {
  enumerate: true
}

module.exports = function enumerateError(err) {
  Object.defineProperties(err, {
    message: enumerate,
    stack: enumerate,
    type: enumerate,
  })
  return err
}