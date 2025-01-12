import { useContext } from 'react'
import { UserContext } from '../exports/UserContext'
import { useUserInfos } from '../hooks/UseUserInfos'

function Profile() {
  const { UserID } = useContext(UserContext)
  const userInfos = useUserInfos(UserID)
  const { firstName, lastName, age } = userInfos.data

  return (
    <div className='centered'>
      {userInfos.status == 'ready' ? (
        <>
          <h1>
            <span className='highlight'>{firstName} </span>
            {lastName}
          </h1>
          <h2 className='subtext'>{age} ans</h2>
          <p>Current UserID is : {UserID}</p>
        </>
      ) : (
        <div>No Data</div>
      )}
    </div>
  )
}

export default Profile
