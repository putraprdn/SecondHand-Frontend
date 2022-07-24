
export const getTimeFormat = (time) => {
    const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const date = new Date(time);
    const getMonthName = monthName[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${day} ${getMonthName}, ${hour}:${minute}`;
}