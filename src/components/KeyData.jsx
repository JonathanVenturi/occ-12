import { useContext } from 'react'
import UserContext from '../UserContext'
import useGetUserNutritionData from '../hooks/UseGetUserNutritionData'

import calories_icon from '../assets/images/calories-icon.png'
import protein_icon from '../assets/images/protein-icon.png'
import carbs_icon from '../assets/images/carbs-icon.png'
import fat_icon from '../assets/images/fat-icon.png'

function KeyData() {
  const { UserID } = useContext(UserContext)
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    useGetUserNutritionData(UserID)

  return (
    <div className='keydata'>
      <div className='calories'>
        <img src={calories_icon} />
        <div className='dataentry'>
          <p className='data'>{calorieCount}kCals</p>
          <p>Calories</p>
        </div>
      </div>
      <div className='proteins'>
        <img src={protein_icon} />
        <div className='dataentry'>
          <p className='data'>{proteinCount}g</p>
          <p>Proteines</p>
        </div>{' '}
      </div>
      <div className='carbohydrates'>
        <img src={carbs_icon} />
        <div className='dataentry'>
          <p className='data'>{carbohydrateCount}g</p>
          <p>Glucides</p>
        </div>{' '}
      </div>
      <div className='lipids'>
        <img src={fat_icon} />
        <div className='dataentry'>
          <p className='data'>{lipidCount}g</p>
          <p>Lipides</p>{' '}
        </div>
      </div>
    </div>
  )
}

export default KeyData
