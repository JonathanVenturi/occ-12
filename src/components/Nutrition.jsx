import PropTypes from 'prop-types'

import calories_icon from '../assets/images/calories-icon.png'
import protein_icon from '../assets/images/protein-icon.png'
import carbs_icon from '../assets/images/carbs-icon.png'
import fat_icon from '../assets/images/fat-icon.png'

function Nutrition({ nutritionData }) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    nutritionData

  return (
    <div className='component nutrition'>
      <div className='calories'>
        <img src={calories_icon} />
        <div className='dataentry'>
          <p className='emphasis'>{calorieCount.toLocaleString()}kCal</p>
          <p className='subtext'>Calories</p>
        </div>
      </div>
      <div className='proteins'>
        <img src={protein_icon} />
        <div className='dataentry'>
          <p className='emphasis'>{proteinCount.toLocaleString()}g</p>
          <p className='subtext'>Proteines</p>
        </div>{' '}
      </div>
      <div className='carbohydrates'>
        <img src={carbs_icon} />
        <div className='dataentry'>
          <p className='emphasis'>{carbohydrateCount.toLocaleString()}g</p>
          <p className='subtext'>Glucides</p>
        </div>{' '}
      </div>
      <div className='lipids'>
        <img src={fat_icon} />
        <div className='dataentry'>
          <p className='emphasis'>{lipidCount.toLocaleString()}g</p>
          <p className='subtext'>Lipides</p>{' '}
        </div>
      </div>
    </div>
  )
}

Nutrition.propTypes = {
  nutritionData: PropTypes.exact({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired
  }).isRequired
}

export default Nutrition
