const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const io = require('socket.io')(server)

const usersDB = require('../utils/user')()
const Task = require('../models/Task')()

io.on('connection', socket => {
  socket.on('createUser', user => {
    usersDB.addUser({
      ...user,
      id: socket.id
    })

    return { id: socket.id }
  })

  socket.on('joinRoom', ({ name, room }) => {
    socket.join(room)
    const usersInRoom = usersDB.getUsersByRoom(room)
    if (usersInRoom.length === 1) {
      const userOwner = usersDB.setRoomOwner(usersInRoom[0].id)
      if (userOwner) io.to(userOwner.id).emit('updateUser', userOwner)
    }
    io.to(room).emit('updateUsers', usersInRoom)
  })

  socket.on('createTask', ({ id, msg }) => {
    const user = usersDB.getUser(id)
    if (user) {
      io.to(user.room).emit('newTask', new Task(msg, id))
    }
  })

  socket.on('resetTask', ({ id }) => {
    const user = usersDB.getUser(id)
    if (user) {
      io.to(user.room).emit('clearTask')
    }
  })

  socket.on('vote', ({ room, vote, id }) => {
    usersDB.vote(id, vote)
    io.to(room).emit('updateUsers', usersDB.getUsersByRoom(room))
  })

  socket.on('setActiveStatus', ({ room, active, id }) => {
    usersDB.setActiveStatus(id, active)
    io.to(room).emit('updateUsers', usersDB.getUsersByRoom(room))
  })

  const exitEvents = ['leftChat', 'disconnect']

  exitEvents.forEach(event => {
    socket.on(event, () => {
      const id = socket.id
      const user = usersDB.getUser(id)
      if (!user) return
      const { room } = user
      usersDB.removeUser(id)
      socket.leave(room)
      io.to(room).emit('updateUsers', usersDB.getUsersByRoom(room))
    })
  })
})

module.exports = {
  app,
  server
}
