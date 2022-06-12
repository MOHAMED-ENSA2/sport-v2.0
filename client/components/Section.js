import React, {useState , useEffect} from 'react'
import Link from 'next/link'

import http from "../service/http"
import {apiEndpoint} from "../config/configData.json"
import { getTimeDifference } from '../utils/date'
import styles from "../styles/Section.module.css"
import Card from './Card'

function Section({title , tag}) {
    const [subjects , setSubjects] = useState([])
    useEffect(() => {
        http.get(apiEndpoint + "/getTagSubjets/" + tag )
        .then((res) => {
            setSubjects(res.data)
            console.log(" tagSubjects : " + tag + " : " , res.data)
        })
        .catch((error) => {
            console.log(error)
        })            
    },[])

    return (
        <div className = {styles.section}>
            <div className={styles.sectionewstitle}>
                {title}
            </div>
            <div className={styles.cards}>
            {
                subjects.map((elm, index) => {
                    if(index < 3){
                        console.log("index" , index)
                        return(
                        <Link href= {"/subject/" + elm.id}>
                            <div className={styles.card}>
                                <Card
                                    title= {elm.title}
                                    image= {"/images" + elm.image}
                                    author ={elm.author}
                                    content = {elm.content}
                                    date = {getTimeDifference(elm.create_at) }
                                />
                            </div>
                        </Link>
                        )
                    }
                })
            }
            </div>
            <div className={styles.sectionmore}>
                <button className={styles.sectionmorebtn}>
                    المزيد
                </button>
            </div>
    </div>
  )
}

export default Section