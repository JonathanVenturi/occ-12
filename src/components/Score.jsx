import { useContext } from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import UserContext from '../UserContext'
import useGetUserInfos from '../hooks/UseGetUserInfos'

function Score() {
  const { UserID } = useContext(UserContext)
  const { score } = useGetUserInfos(UserID)

  const data = [
    {
      score: 100,
      fill: 'transparent'
    },
    {
      score: score,
      fill: 'red'
    }
  ]

  return (
    <div className='score'>
      <div className='label'>Score</div>
      <div className='legend'>
        {score}%<span>de votre objectif</span>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart
          innerRadius='70%'
          outerRadius='90%'
          barSize={20}
          startAngle={90}
          endAngle={-270}
          data={data}>
          <RadialBar cornerRadius={10} dataKey='score' />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score
