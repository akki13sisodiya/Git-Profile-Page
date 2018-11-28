export const monthsWithThreeChar = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getDateInMonthDDYYYYFormat = (date) => {
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    return `${day} ${monthsWithThreeChar[date.getMonth()]} ${date.getFullYear()}`;
};
