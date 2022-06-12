import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Head from 'next/head'

import {getSubjects} from "../store/subjects"
import LastNews from '../components/LastNews'
import MainCard from '../components/MainCard'
import Result from '../components/Result'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'


export default function Home() {
  // const subjects = useSelector(state => state.subjects.data)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getSubjects())
  // } , [])  

  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

      </Head>
    <div>
      <Result/>
    </div>


    <div className={styles.hero}>
        <div className={styles.mainNews}>
            <MainCard image="/images/salah.jpg"/>
        </div>
        <div className={styles.LastNews}>
            <div className={styles.lastNewstitle}>
                <div className={styles.line}></div>
                <div >أهم وآخر الأخبار </div>
                <div className={styles.line}></div>
            </div>
           <LastNews/>

        </div>
    </div>

    <Section 
      title = "الدوري الإنجليزي"
      tag = "2"
    />
    <Section 
      title = "الدوري الإيطالي"
      tag = "3"
    />
    <Section 
      title = "الدوري الإسباني"
      tag = "4"
    />
    <Section 
      title = "الدوري السعودي"
      tag = "5"
    />
    <Section 
      title = "الدوري المغربي"
      tag = "6"
    />
    <Section 
      title = "الدوري المصري"
      tag = "7"
    />
    <Section 
      title = "أخبار الإنتقالات"
      tag = "1"
    />
    <Section 
      title = "الدوري الأمريكي لكرة السلة NBA"
    />
    
   
    </div>
  )
}