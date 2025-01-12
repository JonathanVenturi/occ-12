import { useServiceAPI } from './UseServiceAPI'
import { SessionsData } from '../models/SessionsData'

export function useUserSessions(id) {
  const requestURL = 'user/' + id + '/average-sessions'
  const { response, error, pending } = useServiceAPI(requestURL)

  let status = ''
  let data = new SessionsData()

  if (pending) {
    status = 'pending'
  } else if (error) {
    status = 'error'
  } else {
    data = new SessionsData(response)
    if (data.length != 0) status = 'ready'
    else status = 'error'
  }

  return { status, data }
}
