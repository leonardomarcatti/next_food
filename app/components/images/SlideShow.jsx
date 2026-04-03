'use client'
import { useState, useEffect } from 'react';
import images from '@/data/images';
import styles from './slideshow.module.css'
import Image from 'next/image';

const SlideShow = () => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
         );
      }, 2000);

      return () => clearInterval(interval);
   }, []);

   return <div className={styles.slideshow}>
      {images.map((image, index) => (
         <Image
            key={index}
            src={image.image}
            className={index === currentImageIndex ? styles.active : ''}
            alt={image.alt}
         />
      ))}
   </div>
}

export default SlideShow