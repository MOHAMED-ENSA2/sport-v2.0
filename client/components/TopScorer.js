import React from 'react'
import styles from "../styles/TopScorer.module.css"

function TopScorer({data}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
                 الدوري الإنجليزي الممتاز (2021-2022)
        </div>
        <div className={styles.headers}>
            <div> # </div>
            <div>اللاعب</div>
            <div>الفريق</div>
            <div>الأهداف</div>
        </div>
            
        {    
            data.map((elm,index) => {
            return(
                <div key={index} className={styles.content}>
                    <div>{index + 1}</div>
                    <div> {elm.Player.Name}</div>
                    <div> {elm.Player.Team.Name}</div>
                    <div>{elm.Goals}</div>
                </div>
            )
        })
        }
    </div>
  )
}

export default TopScorer