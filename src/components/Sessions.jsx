import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

function Sessions({ sessionsData }) {
  return (
    <div className='component sessions'>
      <div className='caption'>Durée moyenne des sessions</div>

      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={sessionsData}
          margin={{
            top: 50,
            right: 0,
            left: 0,
            bottom: 5
          }}>
          <XAxis dataKey='day' />
          <Tooltip itemStyle={{ color: 'black' }} />
          <Line
            type='natural'
            dataKey='sessionLength'
            stroke='#fbfbfb'
            strokeWidth={2}
            dot={false}
          />
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
