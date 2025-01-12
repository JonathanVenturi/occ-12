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
        let weekdays = '-LMMJVSD-'
        sessionsData.push({
          day: weekdays[entry.day],
          sessionLength: entry.sessionLength
        })
      }
    })
    return sessionsData
  }
}
