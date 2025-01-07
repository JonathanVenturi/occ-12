import { useEffect, useState } from 'react'
import axios from 'axios'
// Data file for the mock API
import MOCK_API_DATA from '../assets/data/data.js'

function useAPI(request) {
  // Switch for the mock API
  const usesMockData = false
  axios.defaults.baseURL = 'http://localhost:3000'

  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    if (usesMockData) {
      // This is the mock API - For testing and solo demos only
      // Do not push this in production
      const parameters = request.split('/')
      if (parameters[0] === 'user') {
        switch (parameters[2]) {
          case 'activity':
            setResponse(
              MOCK_API_DATA.USER_ACTIVITY.find(
                (user) => user.userId == parameters[1]
              )
            )
            break
          case 'average-sessions':
            setResponse(
              MOCK_API_DATA.USER_AVERAGE_SESSIONS.find(
                (user) => user.userId == parameters[1]
              )
            )
            break
          case 'performance':
            setResponse(
              MOCK_API_DATA.USER_PERFORMANCE.find(
                (user) => user.userId == parameters[1]
              )
            )
            break
          default: {
            setResponse(
              MOCK_API_DATA.USER_MAIN_DATA.find(
                (user) => user.id == parameters[1]
              )
            )
          }
        }
        setPending(false)
      }
    } else {
      // When not using the mock data, we fetch the JSON data through axios
      axios
        .get(request)
        .then((res) => {
          setResponse(res.data.data)
        })
        .catch((err) => {
          setError(err)
        })
        .finally(() => setPending(false))
    }
  }, [request, usesMockData])

  return { response, error, pending }
}

export default useAPI
