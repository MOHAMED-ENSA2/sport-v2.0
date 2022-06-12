import http from "../service/http"
import {apiEndpoint} from "../config/configData.json"

// const
const SUBJECTS_LOAD = "SUBJECTS_LOAD"
const SUBJECTS_SUCCESS = "SUBJECTS_SUCCESS"
const SUBJECTS_FAILED = "SUBJECTS_FAILED"

// action creators
export const getTagSubjects = (tag) => (dispatch) => {
    dispatch({
        type : SUBJECTS_LOAD, 
    })   
    http.get(apiEndpoint + "/getTagSubjets/" +  tag)
    .then((res) => {
        dispatch(
            {
                type : SUBJECTS_SUCCESS, 
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
                type : SUBJECTS_FAILED , 
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
        case SUBJECTS_LOAD :
            return {...state ,loading : true}
        case SUBJECTS_SUCCESS :
            return {
                data : action.payload.data,
                loading : false 
            }
        case SUBJECTS_FAILED :
            return {
                loading : false  , 
                error : action.payload.error
            }
        default : 
            return state
    }
}

export default reducer