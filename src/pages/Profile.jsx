import { useContext } from 'react'
import UserContext from '../UserContext'
import useGetUserInfos from '../hooks/UseGetUserInfos'

function Profile() {
  const { UserID } = useContext(UserContext)

  const { firstName, lastName, age } = useGetUserInfos(UserID)

  return (
    <div>
      <h1>
        <span className='highlight'>{firstName} </span>
        {lastName}
      </h1>
      <h2 className='subtext'>{age} ans</h2>
      <p>Current UserID is : {UserID}</p>
    </div>
  )
}

export default Profile
