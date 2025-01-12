import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
  Dot
} from 'recharts'

function Sessions({ sessionsData }) {
  let graphData = [{ sessionLength: sessionsData[0].sessionLength }]
  graphData = graphData.concat(sessionsData)
  graphData = graphData.concat([
    {
      sessionLength: sessionsData[sessionsData.length - 1].sessionLength
    }
  ])

  return (
    <div className='component sessions'>
      <div className='caption'>Durée moyenne des sessions</div>

      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={graphData}
          margin={{
            top: 100,
            right: 0,
            left: 0,
            bottom: 5
          }}>
          <XAxis
            dataKey='day'
            tickLine={false}
            axisLine={false}
            fillOpacity={0.5}
            stroke='white'
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type='natural'
            dataKey='sessionLength'
            stroke='url(#colorUv)'
            strokeWidth={2}
            dot={false}
            activeDot={<CustomDot />}
          />
          <defs>
            <linearGradient id='colorUv' x1='0%' y1='0' x2='100%' y2='0'>
              <stop offset='0%' stopColor='white' stopOpacity={0.3} />
              <stop offset='100%' stopColor='white' />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

Sessions.propTypes = {
  sessionsData: PropTypes.arrayOf(
    PropTypes.exact({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Sessions

/* eslint-disable react/prop-types */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    if (payload[0].payload.day) {
      return (
        <div className='custom-tooltip'>
          <p className='label'>{payload[0].value + ' min'}</p>
        </div>
      )
    }
  }
}
function CustomCursor(props) {
  const { points, width, height, className, payload } = props
  const { x } = points[0]
  if (payload[0].payload.day) {
    return (
      <Rectangle
        className={className}
        fill='black'
        fillOpacity={0.1}
        x={x}
        y={0}
        width={width}
        height={height * 3}
      />
    )
  }
}
function CustomDot(props) {
  const { cx, cy, payload } = props
  if (payload.day) {
    return <Dot cx={cx} cy={cy} r={4} fill='white' />
  }
}
