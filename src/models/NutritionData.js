export class NutritionData {
  constructor(data) {
    if (data) {
      this.calorieCount = data.keyData.calorieCount
      this.proteinCount = data.keyData.proteinCount
      this.carbohydrateCount = data.keyData.carbohydrateCount
      this.lipidCount = data.keyData.lipidCount
    }
    return this
  }
}
