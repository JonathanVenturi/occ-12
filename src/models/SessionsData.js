export class SessionsData {
  constructor(data) {
    if (data) this.sessionsData = this.FormatData(data)
    return this.sessionsData
  }

  FormatData(data) {
    const sessionsData = []
    data.sessions.forEach((entry) => {
      if (
        typeof entry.day === 'number' &&
        typeof entry.sessionLength === 'number'
      ) {
        sessionsData.push({
          day: entry.day,
          sessionLength: entry.sessionLength
        })
      }
    })
    return sessionsData
  }
}
