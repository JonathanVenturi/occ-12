import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts'

import useGetUserPerformance from '../hooks/UseGetUserPerformance'

import UserContext from '../UserContext'
import { useContext } from 'react'

function Performance() {
  const { UserID } = useContext(UserContext)
  const userPerformance = useGetUserPerformance(UserID)

  return (
    <div className='performance'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart outerRadius='75%' data={userPerformance}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' />
          <Radar dataKey='value' stroke='red' fill='red' fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance
