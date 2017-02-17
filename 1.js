const data = require('./data.js')
const {
    map,
    compose,
    reduce,
    take
} = require('ramda')
// Return the first 25 simple hourly forecast observations.
// Each object in the returned array should include the following forecast infomation:
//  day of the week (Ex: 'Friday')
//  time and date
//  temperature in fahrenheit
//  weather condition (ex: 'Rain')

//console.log(data.hourly_forecast[0].temp.english)
//console.log(data.hourly_forecast[1].FCTTIME.weekday_name)

//console.log(map(x => x.condition, data.hourly_forecast))


var result = compose(
    take(25),
    map(x => ({
            Day: x.FCTTIME.weekday_name,
            Time: x.FCTTIME.pretty,
            Temperature: x.temp.english,
            Condition: x.condition
        })
    ))(data.hourly_forecast)

console.log("1) First 25 simplified hourly forecast observations: ", result)
