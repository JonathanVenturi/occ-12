import PropTypes from 'prop-types'
import error_icon from '../assets/images/error-icon.png'

function Loader({ status }) {
  return (
    <div className='loader'>
      {status == 'pending' && <div className='spinner'></div>}
      {status == 'error' && <img src={error_icon} />}
    </div>
  )
}

Loader.propTypes = {
  status: PropTypes.string.isRequired
}

export default Loader
