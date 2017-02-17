const data = require('./data.js')
const {
    map,
    compose,
    reduce,
    take,
    filter
} = require('ramda')
// When where there be a chance of rain this weekend?

// Return a simplified hourly forecast where the weekend calls for rain or a chance of rain.
// Each object in the returned array should include the following forecast infomation:
  //  day of the week (Ex: 'Friday')
  //  time and date
  //  temperature in fahrenheit
  //  weather condition (ex: 'Rain')

var result = compose(
  map(x => ({
          Day: x.FCTTIME.weekday_name,
          Time: x.FCTTIME.pretty,
          Temperature: x.temp.english,
          Condition: x.condition
      })),
  filter(x => x.condition.includes('Rain'))
  )(data.hourly_forecast)


console.log("When where there be a chance of rain this weekend?", result)
