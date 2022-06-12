
export function generateTodayDate(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());
    return date
}

export function generateYesterdayDate(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() - 1) ;
    return date
}

export function generateTomorrowDate(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 1);
    return date
}

export function getTimeDifference(time){
    const today = new Date()
    const date = new Date(time)
    let diff = Math.floor((today - date) / 1000 ) // secondes
    if(diff >= 60){
        diff =  Math.floor(diff / 60)
        if(diff >= 60){
            diff =  Math.floor(diff / 60)
            if (diff >= 24 ){
                diff =  Math.floor(diff / 24)
                if(diff >= 30){
                    diff =  Math.floor(diff / 30)  
                    if(diff >= 12){
                        diff =  Math.floor(diff / 12)  
                        return diff + " سنة "
                    }
                    return diff + " شهر "
                    }
                return diff + " يوم "
            }
            return diff + " ساعة "
        }
        return diff + " دقيقة "
    }
    return diff + " ثانية "

}