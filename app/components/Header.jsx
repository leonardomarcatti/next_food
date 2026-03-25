import Link from 'next/link';
import logo from '@/app/assets/logo.png'
import styles from './Header.module.css'

const Header = () => {
   return <header className={styles.header}>
      <span>
      <Link href='/'>
         <h1>Next Level Food</h1>
         <img src={logo.src} alt="A plate with food in it" srcset="" />
      </Link>
      </span>
      <nav>
         <Link href='/'>Home</Link>
         <Link href='/meals'>Meals</Link>
         <Link href='/meals/share'>Share</Link>
         <Link href='/community'>Comunity</Link>
      </nav>
   </header>
}

export default Header