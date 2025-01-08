import { useAPI } from './UseAPI'
import { SessionsData } from '../models/SessionsData'

export function useUserSessions(id) {
  const requestURL = 'user/' + id + '/average-sessions'
  const { response, error, pending } = useAPI(requestURL)

  let status = ''
  let data = new SessionsData()

  if (pending) {
    status = 'pending'
  } else if (error) {
    status = 'error'
  } else {
    status = 'ready'
    data = new SessionsData(response)
  }

  return { status, data }
}
