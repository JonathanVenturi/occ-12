import PropTypes from 'prop-types'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

function Score({ score }) {
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
    <div className='component score'>
      <div className='label'>Score</div>
      <div className='caption'>
        <span className='emphasis'>{score}%</span> de votre objectif
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

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default Score
