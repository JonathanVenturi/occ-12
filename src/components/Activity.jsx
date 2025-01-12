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
  const chartDomain = [100, 0]
  activity.forEach((entry) => {
    if (entry.kilogram <= chartDomain[0]) chartDomain[0] = entry.kilogram - 1
    if (entry.kilogram >= chartDomain[1]) chartDomain[1] = entry.kilogram + 1
  })

  return (
    <div className='component activity'>
      <div className='caption'>
        <div className='emphasis'>Activité quotidienne</div>
        <div className='label subtext'>
          <span className='dot black'>Poids (kg)</span>
          <span className='dot red'>Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          barSize={7}
          data={activity}
          margin={{
            top: 120,
            right: 0,
            left: 30,
            bottom: 30
          }}>
          <CartesianGrid strokeDasharray='2 2' vertical={false} />
          <XAxis
            className='custom-axis'
            dataKey='day'
            stroke='#9B9EAC'
            tickLine={false}
            tickMargin={15}
          />
          <YAxis
            className='custom-axis'
            yAxisId='right'
            orientation='right'
            stroke='#9B9EAC'
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
            domain={chartDomain}
          />
          <YAxis yAxisId='left' hide />
          <Tooltip offset={50} content={<CustomTooltip />} />
          <Bar
            radius={[10, 10, 0, 0]}
            yAxisId='right'
            dataKey='kilogram'
            fill='#282D30'
          />
          <Bar
            radius={[10, 10, 0, 0]}
            yAxisId='left'
            dataKey='calories'
            fill='#E60000'
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

/* eslint-disable react/prop-types */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{payload[0].value + 'kg'}</p>
        <p className='label'>{payload[1].value + 'kCal'}</p>
      </div>
    )
  }
}
