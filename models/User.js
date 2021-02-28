class User {
  constructor(name, room, id, admin) {
    this.name = name
    this.room = room
    this.id = id
    this.admin = admin
  }
}

module.exports = () => {
  return User
}
