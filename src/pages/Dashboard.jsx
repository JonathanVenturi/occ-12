// Import context for user auth and ID
import { useContext } from 'react'
import { UserContext } from '../exports/UserContext'

// Import custom hooks for API requests
import { useUserInfos } from '../hooks/UseUserInfos'
import { useUserActivity } from '../hooks/UseUserActivity'
import { useUserSessions } from '../hooks/UseUserSessions'
import { useUserPerformance } from '../hooks/UseUserPerformance'
import { useUserNutritionData } from '../hooks/UseUserNutritionData'

// Import needed components
import Loader from '../components/Loader'
import Activity from '../components/Activity'
import Sessions from '../components/Sessions'
import Performance from '../components/Performance'
import Score from '../components/Score'
import Nutrition from '../components/Nutrition'

function Dashboard() {
  // Getting UserID from context
  const { UserID } = useContext(UserContext)

  // Requesting data from the API
  const userInfos = useUserInfos(UserID)
  const userActivity = useUserActivity(UserID)
  const userSessions = useUserSessions(UserID)
  const userPerformance = useUserPerformance(UserID)
  const userNutritionData = useUserNutritionData(UserID)

  // Destructuring the user infos
  const { firstName, score } = userInfos.data

  // Summary for the welcome message
  // This should probably have some logic to it
  const summary = 'Félicitation ! Vous avez explosé vos objectifs hier 👏'

  if (userInfos.status == 'error') {
    return (
      <div className='error'>
        <h1>
          Nous sommes
          <span className='highlight'> désolés</span>.
        </h1>
        <p className='subtext'>
          Nous n&apos;avons pas réussi à charger vos données
        </p>
      </div>
    )
  }

  return (
    <div className='centered'>
      <div className='daily-summary'>
        {userInfos.status == 'ready' ? (
          <>
            <h1>
              Bonjour <span className='highlight'>{firstName}</span>
            </h1>
            <p>{summary}</p>
          </>
        ) : (
          <Loader status={userInfos.status} />
        )}
      </div>

      <div className='dashboard'>
        <div className='activity'>
          {userActivity.status == 'ready' ? (
            <Activity activity={userActivity.data} />
          ) : (
            <Loader status={userActivity.status} />
          )}
        </div>
        <div className='sessions'>
          {userSessions.status == 'ready' ? (
            <Sessions sessionsData={userSessions.data} />
          ) : (
            <Loader status={userSessions.status} />
          )}
        </div>
        <div className='performance'>
          {userPerformance.status == 'ready' ? (
            <Performance performanceData={userPerformance.data} />
          ) : (
            <Loader status={userPerformance.status} />
          )}
        </div>
        <div className='score'>
          {userInfos.status == 'ready' ? (
            <Score score={score} />
          ) : (
            <Loader status={userInfos.status} />
          )}
        </div>
        <div className='nutrition'>
          {userNutritionData.status == 'ready' ? (
            <Nutrition nutritionData={userNutritionData.data} />
          ) : (
            <Loader status={userNutritionData.status} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
