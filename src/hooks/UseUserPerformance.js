import { useAPI } from './UseAPI'
import { PerformanceData } from '../models/PerformanceData'

export function useUserPerformance(id) {
  const requestURL = 'user/' + id + '/performance'
  const { response, error, pending } = useAPI(requestURL)

  let status = ''
  let data = new PerformanceData()

  if (pending) {
    status = 'pending'
  } else if (error) {
    status = 'error'
  } else {
    data = new PerformanceData(response)
    if (data.length != 0) status = 'ready'
    else status = 'error'
  }

  return { status, data }
}
