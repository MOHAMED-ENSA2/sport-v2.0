import React from 'react'
import styles from "../styles/Match.module.css"

import Image from 'next/image'

function Match({type , league , matches}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.logo}>
              <Image
                src = {league.Logo || "/images/anonyme.jpg"}
                layout = "fill"
              />
            </div>
            <div className={styles.league}>
               {league.Title}
            </div>
        </div>
        <div className={styles.matches}>
          { matches.map((elm,index) => {
            return(
              <div key = {index} className={type === "A" ? styles.match : styles.match + " " + styles.match_typeB}>
                  <div className={styles.time}>
                    {   
                        elm.Period == "f" 
                        ? "إنتهت" 
                        :  elm.Period == "n" 
                        ? 
                        <div>
                            {
                              type === "A" 
                              ? elm.Kickoff.slice(11,16)
                              : elm.Kickoff.slice(0,10) + ".  " + elm.Kickoff.slice(11,16)
                            }
                        </div>
                        : elm.Period == "h"
                        ? <div style={{color : "red" , fontWeight : "600"}}> إستراحة</div>
                        : <div  style={{color : "red" , fontWeight : "600"}}className= {styles.currentminute}>
                          {(elm.Period == "2" && elm.CurrentMinute === 0 ) ? "90+" : elm.CurrentMinute}
                          <span className= {styles.guime}>&apos;</span>
                        </div>
                    }
                  </div>
                  <div className={styles.teams}>
                      <div className={styles.team}>
                        <Image
                          src = {elm.Team1.Logo || "/images/anonyme.jpg"} 
                          width = "12"
                          height= "12"
                        />
                        <span>{elm.Team1.Name}</span>
                      </div>
                      <div className={styles.team}>
                        <Image
                            src = {elm.Team2.Logo || "/images/anonyme.jpg"}
                            width = "12"
                            height= "12"
                          />
                        <span>{elm.Team2.Name}</span>
                      </div>
                  </div>
                  <div className={styles.score}>
                      <div className={styles.score1}>
                        {elm.Score1 === -1 
                          ? "-" 
                          : elm.Period === "f"  
                          ? elm.Score1
                          : <div style={{color : "red" , fontWeight : "700"}}>{elm.Score1}</div>
                        }
                      </div>
                      <div className={styles.score2}>
                        {elm.Score2 === -1 
                          ? "-" 
                          : elm.Period === "f"  
                          ? elm.Score2
                          : <div style={{color : "red" , fontWeight : "700"}}>{elm.Score2}</div>
                        }
                      </div>
                  </div>
              </div>
            )
          })
            
          }            
        </div>
    </div>
  )
}

export default Match