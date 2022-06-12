import React from 'react'
import Image from 'next/image'


import styles from "../styles/LastNewsCard.module.css"

function LastNewsCard({image,width,type}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image src = {image}
                    layout='fill'
                />
            </div>
            <div className={styles.text}>
                {
                    type === "A" &&

                    <div className={styles.tag}>
                        الدوري الإنجليزي
                    </div>
                }


                <div className={styles.title}>
                    ليفربول ينتصر على ليستر سيتي بثنائية ديوغو جوتا 
                </div>
                <div className={styles.time}>
                    قبل 3 ساعات 
                </div>
            </div>
        </div>
  )
}

export default LastNewsCard