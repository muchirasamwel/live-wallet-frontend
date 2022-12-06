const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()
const publicPath = path.join(__dirname, '..', 'build')
const port = process.env.SERVER_PORT | 80
let app = express()

const { createServer } = require('http')
const { Server } = require('socket.io')

var cors = require('cors')

app.use(
  cors({
    'Access-Control-Allow-Origin': '*'
  })
)
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})
const Redis = require('ioredis')

const channelName = 'accounts-channel'

console.log('env.......', process.env)

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS,
  db: 0
})

io.on('connection', socket => {
  console.log('connection....')
  // listen for message from user
  socket.on('createMessage', newMessage => {
    console.log('newMessage', { newMessage })
  })

  // when server disconnects from user
  socket.on('disconnect', () => {
    console.log('disconnected from user')
  })
  return socket
})

//Listen to Redis connection
redis.subscribe(channelName)

redis.on('message', async (channel, payload) => {
  console.log('data from ', { channel, payload })

  const data = JSON.parse(payload).data

  io.emit('accounts_updated', {
    data
  })
})

app.get('/saySomething', (req, res) => {
  io.emit('accounts_updated', { name: 'Abel Less', age: 41 })
  res.send(res.json({ message: 'Success' }))
})
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

httpServer.listen(port, () => {
  console.log('Server running on port: ' + port)
})
