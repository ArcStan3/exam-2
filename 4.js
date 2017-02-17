const data = require('./data.js')
const {
    map,
    compose,
    reduce,
    take,
    filter
} = require('ramda')
// When will it snow?
// Return an array of objects containing:
  // day of the week
  // date and time
  // weather condition

var result = compose(
  map(x => ({
      Day: x.FCTTIME.weekday_name,
      Time: x.FCTTIME.pretty,
      Condition: x.condition
  })),
  filter(x => x.condition === "Snow Showers")
)(data.hourly_forecast)

console.log("When will it snow?", result)
