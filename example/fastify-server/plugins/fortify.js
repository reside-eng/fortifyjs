'use strict'

const fp = require('fastify-plugin')

module.exports = fp(function (app, options, next) {
  const enableCSPNonces = options.enableCSPNonces
  // clear options as helmet will throw when any options is "true"
  options.enableCSPNonces = undefined

  app.addHook('onRequest', function (req, reply, next) {
    console.log('----ON REQUEST')
    console.log(req.headers)
    console.log(reply.headers)
    next()
  })

  app.addHook('preHandler', (req, reply, done) => {
    reply.headers({ 'x-auth': 'token' })
    done()
  })

  next()
}, {
  fastify: '3.x',
  name: 'fastify-helmet'
})
