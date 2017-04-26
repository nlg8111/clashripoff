
export default class GameServer {
  constructor(websocketUrl) {
    this.url = websocketUrl
  }

  connect() {
    this.socket = new WebSocket(this.url)
  }

  subscribe(callback) {
    this.socket.onmessage = callback
  }
}


