import React from 'react'
import styles from "../styles/Table.module.css"

function Players({data}) {
  return (
    <div className={styles.wrapper}>
        {
            data.map((elm,index) => {
                if(elm.Position==0) return(
                    <div key={index}>
                        <div className={styles.headers}>
                            <div> # </div>
                            <div>المدرب</div>
                            <div>الجنسية</div>
                        </div>
                        <div className={styles.content} key = {index}>
                            <div></div>
                            <div>{elm.Name}</div>
                            <div>{elm.Nationality.Value || ""}</div>
                        </div>
                        <div className={styles.headers}>
                            <div> # </div>
                            <div>الحارس</div>
                            <div>الجنسية</div>
                        </div>
                    </div>
                )
                if(elm.Position == 1) return(
                    <div className={styles.content} key = {index}>
                        <div>{elm.Number}</div>
                        <div>{elm.Name}</div>
                        <div>{elm.Nationality.Value || ""}</div>
                    </div>
                )
                }
                )
                   
        }
       
        <div className={styles.headers}>
            <div> # </div>
            <div>اللاعب</div>
            <div>الجنسية</div>
        </div>

        { 
            data.map((elm,index) => {
                if(elm.Position === 0 || elm.Position === 1 ) return 
                return(
                    <div className={styles.content} key = {index}>
                        <div>{elm.Number}</div>
                        <div>{elm.Name}</div>
                        <div>{elm.Nationality.Value || ""}</div>
                    </div>
                )
            })        
        }

    </div>
  )
}

export default Players