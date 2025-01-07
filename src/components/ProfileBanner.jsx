import useGetUserInfos from '../hooks/UseGetUserInfos'
import UserContext from '../UserContext'
import { useContext } from 'react'

function ProfileBanner() {
  const { UserID } = useContext(UserContext)
  const { firstName } = useGetUserInfos(UserID)
  const summary = 'Félicitation ! Vous avez explosé vos objectifs hier 👏'

  return (
    <div className='daily-summary'>
      <h1>
        Bonjour <span className='highlight'>{firstName}</span>
      </h1>
      <p>{summary}</p>
    </div>
  )
}

export default ProfileBanner
