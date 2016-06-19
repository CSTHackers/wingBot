'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAXY0YvRijMBAGIxs4bedvTswDm0kuC3poCBMNmoxK0ZByjcz3txEh8fCUtqMbYwfZANcmWZBoD9P9881LGJxq30i4n1AEJEZA4dVAdxZAwmL1ojRXkqfher7sJKuYLKsBMaPTVZCnCW5hB7yI9GAMnagg8SX0UUjHajsgX0hBtQZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
