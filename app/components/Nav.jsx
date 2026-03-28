'use client'

import styles from './Header.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Nav = () => {
   const path = usePathname()

   return <nav>
      <Link href='/' className={path == '/' ? styles.active : ''}>Home</Link>
      <Link href='/meals' className={path == '/meals' ? styles.active : ''}>Meals</Link>
      <Link href='/meals/share' className={path.endsWith('/share') ? styles.active : ''}>Share</Link>
      <Link href='/community' className={path == '/community' ? styles.active : ''}>Comunity</Link>
   </nav>
}

export default Nav