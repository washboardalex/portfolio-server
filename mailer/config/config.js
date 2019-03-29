const source = require('./source.json');

const user = source.web.USER
const refreshToken = source.web.REFRESH_TOKEN
const accessToken = source.web.ACCESS_TOKEN

module.exports = {
  user,
  clientId: source.web.client_id,
  clientSecret: source.web.client_secret,
  refreshToken,
  accessToken
}