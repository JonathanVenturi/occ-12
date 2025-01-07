import useAPI from './UseAPI'

function useGetUserSessions(id) {
  const requestURL = 'user/' + id + '/average-sessions'
  const { response, error, pending } = useAPI(requestURL)

  let userSessions = []

  if (!pending && !error) {
    userSessions = response.sessions
  }

  return userSessions
}

export default useGetUserSessions
