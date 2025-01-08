export class SessionsData {
  constructor(data) {
    if (data) {
      this.data = data.sessions
    }
    return this.data
  }
}
