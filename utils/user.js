const User = require('../models/User')()
class UsersDB {
  constructor() {
    this.users = []
  }

  addUser(user) {
    this.users = [...this.users, new User(user.name, user.room, user.id)]
  }

  getUser(id) {
    return this.users.find(user => user.id === id)
  }

  getUsersByRoom(room) {
    return this.users.filter(user => user.room === room)
  }

  removeUser(id) {
    this.users = this.users.filter(user => user.id !== id)
  }

  setActiveStatus(id, active) {
    const index = this.users.findIndex(user => user.id === id)
    this.users[index].active = active
  }

  vote(id, vote) {
    const index = this.users.findIndex(user => user.id === id)
    this.users[index].vote = vote
  }

  setRoomOwner(id) {
    if (this.users.some(user => user.admin)) return null
    const index = this.users.findIndex(user => user.id === id)
    this.users[index].admin = true
    return this.users[index]
  }
}

module.exports = () => {
  return new UsersDB()
}
