const data = require('./data.js')
const {
    map,
    compose,
    reduce,
    take,
    filter,
    uniq,
    append
} = require('ramda')
// Is there a chance of rain this weekend?  return either yes or no.

//Expected Output:
// Is there a chance of rain this weekend? Yes



//console.log(map(x => x.condition.includes('Rain'), data.hourly_forecast))

var result = compose(
  reduce((a, b) => b.condition.includes('Rain') ? a += 1 : a, 0),
  filter(x => x.FCTTIME.weekday_name === "Sunday" || x.FCTTIME.weeday_name === "Saturday")
)(data.hourly_forecast) > 0 ? "Yes" : "Nope"

//console.log(data.hourly_forecast)
console.log("Is there a chance of rain this weekend?", result)
