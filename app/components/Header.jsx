import Link from 'next/link';
import logo from '../../public/images/logo.png'
import styles from './Header.module.css'
import Image from 'next/image';
import Nav from './Nav';

const Header = () => {

   return <header className={styles.header}>
      <span>
      <Link href='/'>
         <h1>Next Level Food</h1>
         <Image src={logo}  alt="A plate with food in it" />
      </Link>
      </span>
      <Nav />
   </header>
}

export default Header