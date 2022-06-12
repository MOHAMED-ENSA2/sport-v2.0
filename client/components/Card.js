import Image from 'next/image'
import React from 'react'
import styles from "../styles/Card.module.css"


function Card(props) {
  const {title,image,author,content,date} = props
  return (
    <div className={styles.wrapper}>
        <div className={styles.img}>
            <Image 
                src = {image}
                layout = 'fill'
                className={styles.cardimage}
            />
        </div>
        <div className={styles.text}>
            <div>
                <span className={styles.tag}>
                    الإنتقالات 
                </span>
            </div>
            <div className={styles.title}>
                    {title}
            </div>
            <div className={styles.readmore}>
                <div>
                    قبل {date} 
                </div>
                <div className={styles.more}>
                    <span>المزيد</span> <i className="fas fa-arrow-left fa-xs"></i>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card