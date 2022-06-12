import Image from 'next/image'
import React from 'react'
import styles from "../styles/ResultCard.module.css"

function ResultCard({competition_name,scheduled,team1_name,team2_name,team1_logo,team2_logo,score1,score2, current_minute, period}) {
  return (
        <table className={styles.wrapper}>
            <tr>
                <th className={styles.league} colSpan = "2">
                    {competition_name}
                </th>
                <th  className={styles.left + " " + styles.fontweight300 + " " + styles.time}>
                    {period == "f" 
                    ? "إنتهت" 
                    :  period == "n" 
                    ? scheduled
                    : period == "h"
                    ? "إستراحة"
                    : <div className= {styles.currentminute}>
                        {(period == "2" && current_minute === 0 ) ? "90+" : current_minute}
                        <span className= {styles.guime}>
                        &apos;
                        </span>
                      </div>
                    }
                </th>
            </tr>
            <tr>
                <td >  
                    <div className={styles.logo}>
                        <Image
                            src={team1_logo || "/images/salah.jpg"}
                            layout = 'fill'
                        />
                    </div>
                </td>
                <td className={styles.name + " " + styles.fontweight300}>
                    {team1_name}
                </td>
                <td className={styles.left}>{period === "n" ? '-' : score1}</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.logo}>
                        <Image
                            src={team2_logo || "/images/salah.jpg"}
                            layout = 'fill'
                        />
                    </div>
                </td>
                <td className={styles.name + " " + styles.fontweight300}>
                    {team2_name}
                </td>
                <td className={styles.left}>
                    <div>{period === "n" ? '-' : score2}</div>
                </td>
            </tr>
        </table>
  )
}

export default ResultCard