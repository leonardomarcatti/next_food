import { getMeal } from '@/app/hooks/useGetMeals'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const Page = async ({ params }) => {
   const  {slug}  = await params
   const response = await getMeal(slug)
   
   if (!response) {
      notFound()
   }

   const meal = response
   meal.instructions = meal.instructions.replace(/\n/g, '<br />')
   
   return <>
      <header className={styles.header}>
         <div className={styles.image}>
            <Image src={meal.image} alt={meal.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill/>
         </div>
         <div className={styles.headerText}>
            <h1>{meal.title}</h1>
            <p className={styles.creator}>by <a href={`mailto:${meal.email}}`}>{meal.creator}</a></p>
            <p className={styles.summary}>{meal.summary}</p>
         </div>
      </header>
      <main>
         <p className={styles.instructions} dangerouslySetInnerHTML={{
            __html: meal.instructions
         }}></p>
      </main>
   </>
}

export default Page