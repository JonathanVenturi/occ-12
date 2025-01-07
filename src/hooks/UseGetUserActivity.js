import useAPI from './UseAPI'

function useGetUserActivity(id) {
  const requestURL = 'user/' + id + '/activity'
  const { response, error, pending } = useAPI(requestURL)

  let userActivity = []

  if (!pending && !error) {
    userActivity = response.sessions
  }

  return userActivity
}

export default useGetUserActivity
