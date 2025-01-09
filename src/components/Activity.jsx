import PropTypes from 'prop-types'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

function Activity({ activity }) {
  return (
    <div className='activity'>
      <div className='caption'>
        <div className='emphasis'>Activité quotidienne</div>
        <div className='label subtext'>
          <span className='dot black'>Poids (kg)</span>
          <span className='dot red'>Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          barSize={10}
          data={activity}
          margin={{
            top: 60,
            right: 0,
            left: 0,
            bottom: 0
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' />
          <YAxis yAxisId='left' orientation='left' stroke='black' />
          <YAxis yAxisId='right' orientation='right' stroke='red' />
          <Tooltip />
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

Activity.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.exact({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Activity
