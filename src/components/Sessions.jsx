import UserContext from '../UserContext'
import { useContext } from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import useGetUserSessions from '../hooks/UseGetUserSessions'

function Sessions() {
  const { UserID } = useContext(UserContext)
  const userSessions = useGetUserSessions(UserID)

  return (
    <div className='sessions'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={userSessions}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5
          }}>
          <XAxis dataKey='day' />
          <Tooltip />
          <Line type='monotone' dataKey='sessionLength' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Sessions
