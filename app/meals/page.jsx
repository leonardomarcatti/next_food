import Link from 'next/link'
import styles from './page.module.css'
import Meals from '../components/Meals'
import { getDbConnection } from '@/data/db'
import { Suspense } from 'react'

const getMeals = async () => {
   const db = await getDbConnection()
   const [rows] = await db.execute('SELECT * FROM meals')
   await db.end()
   await new Promise(resolve => setTimeout(resolve, 2000)) //Adiciona um delay
   // throw new Error('Loading meals failed..')
   return rows
}


const Grid = async () => {
   const meals = await getMeals()
   return < Meals meals = { meals } />
}

const Page = async () => {
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
         <Suspense fallback={<h2 className={styles.loading}>Fetching meals...</h2>}>
            <Grid />
         </Suspense>
      </main>
   </>
}

export default Page