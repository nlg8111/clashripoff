
const triggerSubscriptions = (subs, args) => subs && subs.forEach(callback => callback(args))

class GameServer {
  constructor() {
    this.subscriptions = {}
  }

  connect(websocketUrl) {
    this.socket = new WebSocket(websocketUrl)

    this.socket.onmessage = (m) => {
      const event = JSON.parse(m.data)
      triggerSubscriptions(this.subscriptions[event.type], event)
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
    this.socket.send(JSON.stringify({
      type: "start"
    }))
  }

  spawnFriendlyUnit() {
    this.socket.send(JSON.stringify({
      type: "spawn",
      team: "friendly"
    }))
  }

  spawnEnemyUnit() {
    this.socket.send(JSON.stringify({
      type: "spawn",
      team: "enemy"
    }))
  }
}

export default new GameServer()

