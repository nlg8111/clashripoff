
const triggerSubscriptions = (subs) => subs && subs.forEach(callback => callback())

export default class GameServer {
  constructor(websocketUrl) {
    this.url = websocketUrl
    this.subscriptions = {}
  }

  connect() {
    this.socket = new WebSocket(this.url)

    this.socket.onmessage = (m) => {
      const {type} = JSON.parse(m.data)
      triggerSubscriptions(this.subscriptions[type])
    }
  }

  subscribe(type, callback) {
    if(this.subscriptions[type] !== undefined) {
      this.subscriptions[type].push(callback)
    } else {
      this.subscriptions[type] = [callback]
    }
  }

  start() {
    this.socket.send("start")
  }
}


