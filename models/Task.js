class Task {
  constructor(text, id) {
    this.text = text
    this.id = id
    this.time = new Date().toString().slice(15, 24)
  }
}

module.exports = () => {
  return Task
}
