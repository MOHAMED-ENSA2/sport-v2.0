import Image from 'next/image'
import React from 'react'
import styles from "../styles/MainCard.module.css"


function MainCard({image}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.img}>
            <Image src = {image}
                    layout = "fill"
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
                ليفربول يقترب من تجديد عقد محمد صلاح
            </div>
            <div className={styles.readmore}>
                <div>
                    قبل 12 ساعة
                </div>
                <div className={styles.more}>
                    <span>المزيد</span> <i className="fas fa-arrow-left fa-xs"></i>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default MainCard