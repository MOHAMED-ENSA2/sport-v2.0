import  React ,{ useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux"

import * as date from "../utils/date"
import {apiEndpoint} from "../config/configData.json"
import http from '../service/http'
import { getMatches } from '../store/matches'

import styles from "../styles/Result.module.css"
import ResultCard from './ResultCard'

const leagues = [22310 , 22275 , 22393 , 22309 , 22551 , 22839  ,22826 , 23430, 22709, 22426, 22392 , 22365]

function Result() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.matches.data)
  const [count,setCout] = useState(0)
  const [display,setDisplay] = useState(0)

  useEffect(() => {
      dispatch(getMatches(date.generateTodayDate()));
  }, [])

  useEffect(() => {
    setTimeout( () => {
      setCout(state => state + 1)
      dispatch(getMatches(date.generateTodayDate()));
    }, 10000)
  
  }, [count])

  return (
    <div className={styles.container}>

        <div className={styles.arrowright} onClick = {() => setDisplay(state => state > - 10 ? state - 1 : state ) }>
            <i className="fas fa-angle-right fa-3x"></i>
        </div>
        <div className={styles.wrapper} style={{transform : `translateX(${-14.2*display}rem)` }} >
          { data && 
            data.map((elm,index) => {
              if(!leagues.includes(elm.League.Id)) return
              return(
                elm.Stages[0].Matches.map( (item,i) => {
                  return(
                      <ResultCard 
                          key={i}
                          competition_name = {item.League.Title.split(" ").splice(0,4).join(" ")}
                          scheduled = {item.Kickoff.slice(11,16)}
                          current_minute = {item.CurrentMinute}
                          score1 = {item.Score1}
                          score2 = {item.Score2}
                          team1_name = {item.Team1.Name} 
                          team2_name  = {item.Team2.Name}
                          team1_logo = {item.Team1.Logo} 
                          team2_logo = {item.Team2.Logo}
                          period = {item.Period} 
                      /> 
                  )
                }
              )

              )
            })
          }
        </div>
        <div className={styles.arrowleft}  onClick = {() => setDisplay(state => state < 0 ? state + 1 : state ) } >
            <i className="fas fa-angle-left fa-3x"></i>
        </div>
    </div>
  )
}

export default Result