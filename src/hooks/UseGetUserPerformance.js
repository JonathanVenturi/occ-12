import useAPI from './UseAPI'

function useGetUserPerformance(id) {
  const requestURL = 'user/' + id + '/performance'
  const { response, error, pending } = useAPI(requestURL)

  let userPerformance = []

  if (!pending && !error) {
    userPerformance = response.data
  }

  return userPerformance
}

export default useGetUserPerformance
