class User {
  constructor(name, room, id) {
    this.name = name
    this.room = room
    this.id = id
    this.admin = false
    this.vote = null
    this.active = true
  }
}

module.exports = () => {
  return User
}
