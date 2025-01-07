import Activity from '../components/Activity'
import Sessions from '../components/Sessions'
import Performance from '../components/Performance'
import Score from '../components/Score'

import KeyData from '../components/KeyData'
import ProfileBanner from '../components/ProfileBanner'

function Dashboard() {
  return (
    <>
      <ProfileBanner />
      <div className='dashboard'>
        <Activity />
        <Sessions />
        <Performance />
        <Score />
        <KeyData />
      </div>
    </>
  )
}

export default Dashboard
