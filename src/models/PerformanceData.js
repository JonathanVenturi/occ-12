export class PerformanceData {
  constructor(data) {
    if (data) this.performanceData = this.FormatData(data)
    return this.performanceData
  }

  FormatData(data) {
    const performanceData = []
    data.data.forEach((entry) => {
      if (
        typeof entry.value === 'number' &&
        typeof data.kind[entry.kind] === 'string'
      ) {
        performanceData.push({
          kind: data.kind[entry.kind],
          value: entry.value
        })
      }
    })
    return performanceData
  }
}
