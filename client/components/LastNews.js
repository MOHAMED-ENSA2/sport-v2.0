import React from 'react'
import styles from "../styles/LastNews.module.css"
import LastNewsCard from './LastNewsCard'

function LastNews() {
  return (
    <div  className = {styles.wrapper}>
        <LastNewsCard image = "/images/img3.jpg"  type = "A" />
        <LastNewsCard image = "/images/img1.jpg"  type = "A" />
        <LastNewsCard image = "/images/img4.jpg"  type = "A" />
        <LastNewsCard image = "/images/img2.jpg"  type = "A" />
        <LastNewsCard image = "/images/img2.jpg"  type = "A" />
    </div>
  )
}

export default LastNews