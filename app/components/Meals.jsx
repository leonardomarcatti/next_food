import styles from './meals.module.css'
import Meal from './Meal'


const Meals = ({meals}) => {
   return <ul className={styles.meals}>
      {
         meals.map(meal => <li key={meal.id}>
            <Meal {...meal} />
         </li>)
      }
   </ul>
}

export default Meals