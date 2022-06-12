import Link from 'next/link'
import React, {useState} from 'react'

import {ctg} from "../utils/ctg"
import styles from "../styles/Navbar.module.css"

function Navbar() {
    const [darkmode  ,setDarkmode] = useState(false)
    const [display, setDisplay] = useState("")
    const [showSideBar, setShowSideBar] = useState(false)

    const handleDisplay = (target) => {
        setDisplay(target)
    }

    return (          
    <div className={styles.wrapper}>
         <div className={styles.items}>
            <div className={styles.logo}>
                الشعار
            </div>

            <Link href="/">
                <div onMouseOver={() => handleDisplay("main")} className={styles.item}>الرئيسية</div>
            </Link>
            <Link href="/">
                <div onMouseOver={() => handleDisplay("news")} className={styles.item + " " + styles.news}>الأخبار</div>
            </Link>
            <div onMouseOver={() => handleDisplay("matches")} className={styles.item}><span>المباريات</span> <span><i className="fa fa-chevron-down fa-xs" aria-hidden="true"></i></span> </div>
            <div onMouseOver={() => handleDisplay("leagues")} className={styles.item}><span>المسابقات</span> <span><i className="fa fa-chevron-down fa-xs" aria-hidden="true"></i></span> </div>
            <div onMouseOver={() => handleDisplay("teams")} className={styles.item}><span>الفرق</span> <span><i className="fa fa-chevron-down fa-xs" aria-hidden="true"></i></span></div>
            <div onMouseOver={() => handleDisplay("players")} className={styles.item + " " + styles.players}><span>اللاعبين</span> <span><i className="fa fa-chevron-down fa-xs" aria-hidden="true"></i></span></div>
            <div onMouseOver={() => handleDisplay("otherSports")} className={styles.item}><span>رياضات أخرى</span> <span><i className="fa fa-chevron-down fa-xs" aria-hidden="true"></i></span> </div>
         </div>
         <div className={styles.leftBar}>
            <div className={darkmode ? styles.darkModeSwitcher + " " + styles.onLightmode : styles.darkModeSwitcher} onClick = {() => setDarkmode(state => !state)} >
                {   !darkmode 
                    ? <div className={styles.darkmode}></div>
                    : <div className={styles.lightmode}></div>
                }
            </div>
            <div className={styles.search}>
                <i className= "fa fa-search" aria-hidden="true"></i>
            </div>
         </div>
            {   display === "teams" ?
                <div className={styles.categories}>
                    { 
                        ctg.teams.map((elm, i) => {
                            return(
                                <div key={i} className={styles.ctgitems}>
                                    { elm.map((item,index) => {
                                            
                                        if (index === 0) 
                                            return <div  key = {index} className={styles.title}>{item.league}</div> 
                                        
                                        return ( 
                                            <Link key = {index} href={"/teams/" + item.id}>
                                                <div className={styles.ctgitem} key = {index}>{item.team}</div>
                                            </Link>
                                        )
                                    })
                                    }   
                                </div>
                            )
                        })
                    }
                </div>
                : display === "leagues" ?
                <div className={styles.categories}>
                    {
                        ctg.leagues.map((elm , i) => {
                            return(
                                <div key={i} className={styles.ctgitems}>
                                    { elm.map((item,index) => {
                                            
                                        if (index === 0) 
                                            return <div  key = {index} className={styles.title}>{item.title}</div> 
                                        
                                        return ( 
                                            <Link key = {index}   href={"/leagues/" + item.id}>
                                                <div className={styles.ctgitem} key = {index}>{item.team}</div>
                                            </Link>
                                        )
                                    })
                                    }   
                                </div>
                            )
                        })
                    }
                </div>
                : display === "matches" ?
                <div className={styles.categories}>
                    {
                        ctg.matches.map((item,index) => {
                            return ( 
                                <Link key = {index} href={"/matches/" + item.date}>
                                    <div className={styles.ctgitem} >{item.day}</div>
                                </Link>
                            )                        
                        })
                    }
                </div>
                : display === "players" ?
                <div className={styles.categories}>
                    {
                        ctg.players.map((elm , i) => {
                            return(
                                <div  key={i} className={styles.ctgitems}>
                                    { elm.map((item,index) => {
                                            
                                        if (index === 0) 
                                            return <div  key = {index} className={styles.title}>{item.title}</div> 
                                        
                                        return ( 
                                            <Link key = {index} href={"/players/" + item.id}>
                                                <div className={styles.ctgitem} key = {index}>{item.player}</div>
                                            </Link>
                                        )
                                    })
                                    }   
                                </div>
                            )
                        })
                    }
                </div>
                :   ""
            }

        <span className={styles.lineContainer } onClick={() => {setShowSideBar(!showSideBar); console.log(showSideBar)}}>
            <div className={!showSideBar ? styles.line : styles.line + " " + styles.line1active}></div>
            <div className={!showSideBar ? styles.line : styles.line + " " + styles.line2active}></div>
            <div className={!showSideBar ? styles.line : styles.line + " " + styles.line3active}></div>
        </span>
   </div>
  )
}

export default Navbar