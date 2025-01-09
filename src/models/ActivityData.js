export class ActivityData {
  constructor(data) {
    if (data) this.activityData = this.FormatData(data)
    return this.activityData
  }

  FormatData(data) {
    const activityData = []
    data.forEach((entry) => {
      if (
        typeof entry.day === 'string' &&
        typeof entry.kilogram === 'number' &&
        typeof entry.calories === 'number'
      ) {
        activityData.push({
          day: entry.day,
          kilogram: entry.kilogram,
          calories: entry.calories
        })
      }
    })
    return activityData
  }
}
