// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
    let day = s.slice(8) // pm or am
    let time = s.slice(0, 2) // 12
    let middle = s.slice(2, -2)
    if(day === 'PM'){
        if(time === '12'){
            return `${time}${middle}`
        } else {
            time = Number(time)
            let newTime = time += 12
            return `${newTime}${middle}`
        }
    } else {
        if(time === '12'){
            return `00${middle}`
        } else {
            return `${time}${middle}`
        }
    }
    
}

function main() {
    let res = timeConversion('07:05:45PM');
    console.log(res)
}

main();
