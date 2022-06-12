import React from 'react'
import styles from "../styles/Table.module.css"

function Table({data}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
                 الدوري الإنجليزي الممتاز (2021-2022)
        </div>
        <div className={styles.headers}>
            <div> # </div>
            <div>الفريق</div>
            <div>لعب</div>
            <div>الفرق</div>
            <div>النقاط</div>
        </div>

        { 
            data.map((elm,index) => {
                return(
                <div className={styles.content} key = {index}>
                    <div>{index + 1}</div>
                    <div>{elm.Team.Name}</div>
                    <div>{elm.Played}</div>
                    <div>{elm.GoalDifference}</div>
                    <div>{elm.Points}</div>
                </div>
                )
            })        
        }

    </div>
  )
}

export default Table