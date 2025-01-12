export class PerformanceData {
  constructor(data) {
    if (data) this.performanceData = this.FormatData(data)
    return this.performanceData
  }

  FormatData(data) {
    const performanceData = [
      {
        kind: 'Intensité',
        value: data.data.find(
          (item) =>
            item.kind ==
            Object.keys(data.kind).find((key) => data.kind[key] === 'intensity')
        ).value
      },
      {
        kind: 'Vitesse',
        value: data.data.find(
          (item) =>
            item.kind ==
            Object.keys(data.kind).find((key) => data.kind[key] === 'speed')
        ).value
      },
      {
        kind: 'Force',
        value: data.data.find(
          (item) =>
            item.kind ==
            Object.keys(data.kind).find((key) => data.kind[key] === 'strength')
        ).value
      },
      {
        kind: 'Endurance',
        value: data.data.find(
          (item) =>
            item.kind ==
            Object.keys(data.kind).find((key) => data.kind[key] === 'endurance')
        ).value
      },
      {
        kind: 'Energie',
        value: data.data.find(
          (item) =>
            item.kind ==
            Object.keys(data.kind).find((key) => data.kind[key] === 'energy')
        ).value
      },
      {
        kind: 'Cardio',
        value: data.data.find(
          (item) =>
            item.kind ==
            Object.keys(data.kind).find((key) => data.kind[key] === 'cardio')
        ).value
      }
    ]

    return performanceData
  }
}
