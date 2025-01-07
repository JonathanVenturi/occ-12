import useAPI from './UseAPI'

function useGetUserNutritionData(id) {
  const requestURL = 'user/' + id
  const { response, error, pending } = useAPI(requestURL)

  let calorieCount = 0
  let proteinCount = 0
  let carbohydrateCount = 0
  let lipidCount = 0

  if (!pending && !error) {
    const userNutritionData = response.keyData
    calorieCount = userNutritionData.calorieCount
    proteinCount = userNutritionData.proteinCount
    carbohydrateCount = userNutritionData.carbohydrateCount
    lipidCount = userNutritionData.lipidCount
  }

  return { calorieCount, proteinCount, carbohydrateCount, lipidCount }
}

export default useGetUserNutritionData
