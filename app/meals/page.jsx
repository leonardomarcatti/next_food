import Link from 'next/link'
import styles from './page.module.css'
import Meals from '../components/Meals'
import { getDbConnection } from '@/data/db'

async function getMeals() {
   const db = await getDbConnection()
   const [rows] = await db.execute('SELECT * FROM meals')
   await db.end()
   return rows
}

const Page = async () => {
   const meals = await getMeals()

   return <>
      <header className={styles.header}>
         <h1>
            Delicious meals, created <span className={styles.highlight}>by you</span>
         </h1>
         <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
         <p className={styles.cta}>
            <Link href='/meals/share'>Share you favorite recipe</Link>
         </p>
      </header>

      <main className={styles.main}>
         <Meals meals={meals} />
      </main>
   </>
}

export default Page