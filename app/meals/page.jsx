import Link from 'next/link'
import styles from './page.module.css'
import { Suspense } from 'react'
import Grid from '../components/Grid'

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