import { useAPI } from './UseAPI'
import { ActivityData } from '../models/ActivityData'

export function useUserActivity(id) {
  const requestURL = 'user/' + id + '/activity'
  const { response, error, pending } = useAPI(requestURL)

  let status = ''
  let data = new ActivityData()

  if (pending) {
    status = 'pending'
  } else if (error) {
    status = 'error'
  } else {
    status = 'ready'
    data = new ActivityData(response.sessions)
  }

  return { status, data }
}
