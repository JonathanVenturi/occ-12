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
    <div className='performance'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart outerRadius='75%' data={performanceData}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' />
          <Radar dataKey='value' stroke='red' fill='red' fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

Performance.propTypes = {
  performanceData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Performance
