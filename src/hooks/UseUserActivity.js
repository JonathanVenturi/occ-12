import { useServiceAPI } from './UseServiceAPI'
import { ActivityData } from '../models/ActivityData'

export function useUserActivity(id) {
  const requestURL = 'user/' + id + '/activity'
  const { response, error, pending } = useServiceAPI(requestURL)

  let status = ''
  let data = new ActivityData()

  if (pending) {
    status = 'pending'
  } else if (error) {
    status = 'error'
  } else {
    data = new ActivityData(response.sessions)
    if (data.length != 0) status = 'ready'
    else status = 'error'
  }

  return { status, data }
}
