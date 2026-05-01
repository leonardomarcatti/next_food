import { getDbConnection } from '@/data/db'

const useGetMeals = async () => {
   const db = await getDbConnection()
   const [rows] = await db.execute('SELECT * FROM meals')
   await db.end()
   await new Promise(resolve => setTimeout(resolve, 2000)) //Adiciona um delay
   return rows
}


const getMeal = async (slug) => {
   const db = await getDbConnection()
   const [rows] = await db.execute(
      'SELECT * FROM meals WHERE slug = ?',
      [slug]
   )
   await db.end()
   return rows[0]
}

export {getMeal}
export default useGetMeals