import React from 'react'
import Image from 'next/image'

import styles from "../styles/About.module.css"

function About(props) {
  
  const {birthday, nationality ,height,weight , number, teamName, teamLogo, age, nationalTeamName, nationalTeamLogo} = props
  
  return (
    <div className={styles.wrapper}>
        <div className={styles.sections}>
            <div className={styles.right}>
                <div className={styles.section}>
                    <div>
                        تاريخ الإزدياد
                    </div>
                    <div>
                        {birthday}
                    </div>
                </div>
                <div className={styles.section}>
                    <div>
                        الطول
                    </div>
                    <div>
                        {height} سم
                    </div>
                </div>
                <div className={styles.section}>
                    <div>
                        الفريق
                    </div>
                    <div>
                        {teamName}
                    </div>
                </div>
                <div className={styles.section}>
                    <div>
                        الجنسية
                    </div>
                    <div className={styles.nationality}>
                        {nationality}
                        {   nationalTeamLogo &&
                            <Image
                                src ={nationalTeamLogo}
                                width = "15"
                                height = "10"
                            />
                        }
                    </div>
                </div>
            </div>
            <div className={styles.left}>
                <div className={styles.section}>
                    <div>
                        العمر
                    </div>
                    <div>
                       {age}
                    </div>
                </div>
                <div className={styles.section}>
                    <div>
                        الوزن
                    </div>
                    <div>
                       {weight} كلغ
                    </div>
                </div>
                <div className={styles.section}>
                    <div>
                        الرقم
                    </div>
                    <div>
                        {number}
                    </div>
                </div>

                <div className={styles.section}>
                    <div>
                        المنتخب
                    </div>
                    <div className={styles.nationality}>
                       {nationalTeamName}
                       { nationalTeamLogo &&
                        <Image
                            src = {nationalTeamLogo}
                            width = "15"
                            height = "10"
                        />}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About