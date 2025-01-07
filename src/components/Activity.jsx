import UserContext from '../UserContext'
import { useContext } from 'react'
import useGetUserActivity from '../hooks/UseGetUserActivity'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

function Activity() {
  const { UserID } = useContext(UserContext)
  const userActivity = useGetUserActivity(UserID)

  return (
    <div className='activity'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          barSize={10}
          data={userActivity}
          margin={{
            top: 50,
            right: 0,
            left: 0,
            bottom: 5
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' />
          <YAxis yAxisId='left' orientation='left' stroke='black' />
          <YAxis yAxisId='right' orientation='right' stroke='red' />
          <Tooltip />
          <Legend
            align='right'
            verticalAlign='top'
            iconSize={10}
            wrapperStyle={{ top: 20, right: 20 }}
          />
          <Bar
            radius={[10, 10, 0, 0]}
            yAxisId='left'
            dataKey='kilogram'
            fill='black'
          />
          <Bar
            radius={[10, 10, 0, 0]}
            yAxisId='right'
            dataKey='calories'
            fill='red'
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Activity
