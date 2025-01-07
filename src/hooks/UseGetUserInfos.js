import useAPI from './UseAPI'

function useGetUserInfos(id) {
  const requestURL = 'user/' + id
  const { response, error, pending } = useAPI(requestURL)

  let firstName = ''
  let lastName = ''
  let age = 0
  let score = 0

  if (!pending && !error) {
    const userData = response

    firstName = userData.userInfos.firstName
    lastName = userData.userInfos.lastName
    age = userData.userInfos.age

    if (userData.score) {
      score = userData.score * 100
    } else if (userData.todayScore) {
      score = userData.todayScore * 100
    }
  }

  return { firstName, lastName, age, score }
}

export default useGetUserInfos
