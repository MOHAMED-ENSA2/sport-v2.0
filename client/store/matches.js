import http from "../service/http"
import {apiEndpoint} from "../config/configData.json"

// const
const GET_MATCHES_LOAD = "GET_MATCHES_LOAD"
const GET_MATCHES_SUCCESS = "GET_MATCHES_SUCCESS"
const GET_MATCHES_FAILED = "GET_MATCHES_FAILED"

// action creators
export const getMatches = (date) => (dispatch) => {
    dispatch({
        type : GET_MATCHES_LOAD , 
    })   
    http.get(apiEndpoint + "/matches/" + date)
    .then((res) => {
        console.log(" res.data : " ,res.data)
        dispatch(
            {
                type : GET_MATCHES_SUCCESS , 
                payload : {
                    loading : false , 
                    data : res.data
                }
            }
        )
    })
    .catch((error) => {
        dispatch(
            {
                type : GET_MATCHES_FAILED , 
                payload : {
                    loading : false , 
                    error : error
                }
            }
        )
    })

}


// reducers 
const reducer = (state = { data : [] , loading : false} , action) => {

    switch(action.type){
        case GET_MATCHES_LOAD :
            return {...state ,loading : true}
        case GET_MATCHES_SUCCESS :
            return {
                data : action.payload.data,
                loading : false 
            }
        case GET_MATCHES_FAILED :
            return {
                loading : false  , 
                error : action.payload.error
            }
        default : 
            return state
    }
}

export default reducer