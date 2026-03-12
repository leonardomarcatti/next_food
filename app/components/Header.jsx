import Link from 'next/link';

const Header = () => {
   return <header>
      <span>
         <h1>Next Food</h1>
         <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      </span>
      <nav>
         <Link href='/'>Home</Link>
         <Link href='/about'>About us</Link>
         <Link href='/blog'>Blog</Link>
      </nav>
   </header>
}

export default Header