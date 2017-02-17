const data = require('./data.js')
const {
    map,
    compose,
    reduce,
    take,
    filter
} = require('ramda')
// What will the weather be like during my morning commute?
// Return an array of objects containing:
// day of the week
// date and time
// weather condition
//  for the weekday morning rush hour (Monday through Friday / 7 am and 8 am)


//console.log(filter(x => x.FCTTIME.hour === "6", data.hourly_forecast))


var result = compose(
    map(x => ({
        Day: x.FCTTIME.weekday_name,
        Time: x.FCTTIME.pretty,
        Condition: x.condition
    })),
    filter(x => x.FCTTIME.hour === "7" || x.FCTTIME.hour === "8")
)(data.hourly_forecast)

console.log("What will the weather be like during my morning commute?", result)
