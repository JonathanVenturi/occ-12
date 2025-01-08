import { useContext } from 'react'
import { UserContext } from '../exports/UserContext'
import { useUserInfos } from '../hooks/UseUserInfos'

function Profile() {
  const { UserID } = useContext(UserContext)
  const userInfos = useUserInfos(UserID)
  const { firstName, lastName, age } = userInfos.data

  return (
    <>
      {userInfos.status == 'ready' ? (
        <div>
          <h1>
            <span className='highlight'>{firstName} </span>
            {lastName}
          </h1>
          <h2 className='subtext'>{age} ans</h2>
          <p>Current UserID is : {UserID}</p>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </>
  )
}

export default Profile
