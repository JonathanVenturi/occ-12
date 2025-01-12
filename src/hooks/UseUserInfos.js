import { useServiceAPI } from './UseServiceAPI'
import { UserInfos } from '../models/UserInfos'

export function useUserInfos(id) {
  const requestURL = 'user/' + id
  const { response, error, pending } = useServiceAPI(requestURL)

  let status = ''
  let data = new UserInfos()

  if (pending) {
    status = 'pending'
  } else if (error) {
    status = 'error'
  } else {
    data = new UserInfos(response)
    if (data.firstName) status = 'ready'
    else status = 'error'
  }

  return { status, data }
}
