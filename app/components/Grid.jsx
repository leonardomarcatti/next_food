import useGetMeals from "../hooks/useGetMeals"
import Meals from "./Meals"


const Grid = async () => {
   const meals = await useGetMeals()
   return < Meals meals={meals} />
}

export default Grid