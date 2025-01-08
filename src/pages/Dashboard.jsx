// Import context for user auth and ID
import { useContext } from 'react'
import UserContext from '../UserContext'

// Import custom hooks for API requests
import useGetUserInfos from '../hooks/UseGetUserInfos'
import useGetUserActivity from '../hooks/UseGetUserActivity'
import useGetUserSessions from '../hooks/UseGetUserSessions'
import useGetUserPerformance from '../hooks/UseGetUserPerformance'
import useGetUserNutritionData from '../hooks/UseGetUserNutritionData'

// Import needed components
import Activity from '../components/Activity'
import Sessions from '../components/Sessions'
import Performance from '../components/Performance'
import Score from '../components/Score'
import Nutrition from '../components/Nutrition'

function Dashboard() {
  // Getting UserID from context
  const { UserID } = useContext(UserContext)

  // Requesting data from the API
  const { firstName, score } = useGetUserInfos(UserID)
  const userActivity = useGetUserActivity(UserID)
  const userSessions = useGetUserSessions(UserID)
  const userPerformance = useGetUserPerformance(UserID)
  const userNutritionData = useGetUserNutritionData(UserID)

  // Summary for the welcome message
  // This should probably have logic to it
  const summary = 'Félicitation ! Vous avez explosé vos objectifs hier 👏'

  return (
    <>
      {!firstName ? (
        <div className='error'>
          <h1>
            Nous sommes
            <span className='highlight'> désolés</span>.
          </h1>
          <p className='subtext'>
            Nous n&apos;avons pas réussi à charger vos données
          </p>
        </div>
      ) : (
        <div className='daily-summary'>
          <h1>
            Bonjour <span className='highlight'>{firstName}</span>
          </h1>
          <p>{summary}</p>
        </div>
      )}

      <div className='dashboard'>
        {userActivity.length != 0 && <Activity activity={userActivity} />}
        {userSessions.length != 0 && <Sessions sessionsData={userSessions} />}
        {userPerformance.length != 0 && (
          <Performance performanceData={userPerformance} />
        )}
        {score && <Score score={score} />}
        {userNutritionData && <Nutrition nutritionData={userNutritionData} />}
      </div>
    </>
  )
}

export default Dashboard
