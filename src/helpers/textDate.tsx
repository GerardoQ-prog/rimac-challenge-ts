export const toStringDate = (date:any) => {
    let day = date.getDate()
    if(day<10){
        day=`0${day}`
    }
    let month = date.getMonth()+1
    if(month<10){
        month=`0${month}`
    }
    let year = date.getFullYear()

    return year + '-' + month + '-' + day
}