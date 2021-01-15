// for passport authentication using redis
const config = {}
config.redisStore = {
  url: "redis://localhost:6379",
  secret: "monolith"
}

module.exports = config
