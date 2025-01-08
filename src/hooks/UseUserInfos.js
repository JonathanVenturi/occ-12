import { useAPI } from './UseAPI'
import { UserInfos } from '../models/UserInfos'

export function useUserInfos(id) {
  const requestURL = 'user/' + id
  const { response, error, pending } = useAPI(requestURL)

  let status = ''
  let data = new UserInfos()

  if (pending) {
    status = 'pending'
  } else if (error) {
    status = 'error'
  } else {
    status = 'ready'
    data = new UserInfos(response)
  }

  return { status, data }
}
