export function convertDate(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    date = new Date(date);
    let day = days[date.getDay()] 
    let result= date.getDate() + ' ' + months[date.getMonth()]  
    + ', ' + date.getFullYear(); //Tuesday February 12 2013
    // console.log({result});
    return result
}