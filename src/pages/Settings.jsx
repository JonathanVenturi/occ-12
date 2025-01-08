import { useContext } from 'react'
import { UserContext } from '../exports/UserContext'

function Settings() {
  const { UserID, setUserID } = useContext(UserContext)

  return (
    <div>
      <p>Settings - Current User is : {UserID}</p>
      <button onClick={swapUser}>Swap User</button>
    </div>
  )

  function swapUser() {
    UserID == '12' ? setUserID(18) : setUserID(12)
  }
}

export default Settings
