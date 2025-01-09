export class NutritionData {
  constructor(data) {
    if (data) this.FormatData(data)
  }

  FormatData(data) {
    if (
      typeof data.keyData.calorieCount === 'number' &&
      typeof data.keyData.proteinCount === 'number' &&
      typeof data.keyData.carbohydrateCount === 'number' &&
      typeof data.keyData.lipidCount === 'number'
    ) {
      this.calorieCount = data.keyData.calorieCount
      this.proteinCount = data.keyData.proteinCount
      this.carbohydrateCount = data.keyData.carbohydrateCount
      this.lipidCount = data.keyData.lipidCount
    }
  }
}
