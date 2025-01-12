import PropTypes from 'prop-types'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts'

function Performance({ performanceData }) {
  return (
    <div className='component performance'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart outerRadius='70%' data={performanceData}>
          <PolarGrid radialLines={false} stroke='white' />
          <PolarAngleAxis
            dataKey='kind'
            tick={{ fill: 'white' }}
            tickSize={5}
          />
          <Radar dataKey='value' fill='red' fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

Performance.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.exact({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Performance
