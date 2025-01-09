import { useAPI } from './UseAPI'
import { NutritionData } from '../models/NutritionData'

export function useUserNutritionData(id) {
  const requestURL = 'user/' + id
  const { response, error, pending } = useAPI(requestURL)

  let status = ''
  let data = new NutritionData()

  if (pending) {
    status = 'pending'
  } else if (error) {
    status = 'error'
  } else {
    data = new NutritionData(response)
    if (data.calorieCount) status = 'ready'
    else status = 'error'
  }

  return { status, data }
}
