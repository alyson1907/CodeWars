/* https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination
of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time,
separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be
written in English.

A more significant units of time will occur before than a least significant one. Therefore, `1 second and 1 year` is not correct, but `1 year and 1 second` is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead.
Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

const formatDuration = (seconds) => {
  const joinEverythingAllDatesAndNumbersAndYearsAndMonthsAndHoursAndEverythingWeParsedSoFar = (years, days, hours, mins, secs) => {
    plural = number => {
      return parseInt(number) != 1 ? 's' : ''
    }
    const durations = [years, days, hours, mins, secs]
    const labels = ['year', 'day', 'hour', 'minute', 'second']

    const strsArray = durations.reduce((arr, dur, i) => {
      if (!dur) return arr
      return [...arr, `${dur} ${labels[i]}${plural(dur)}`]
    }, [])

    let EverythingAllDatesAndNumbersAndYearsAndMonthsAndHoursAndEverythingWeParsedSoFarBUTJoinedANDWithThe_And_Word__ormaybenot__BeforeTheLastDurationUnit
    if (strsArray.length > 1) {
      const last = strsArray.pop()
      const EverythingAllDatesAndNumbersAndYearsAndMonthsAndHoursAndEverythingWeParsedSoFarBUTJoinedWithoutTheLastDurationUnit = strsArray.join(', ')
      EverythingAllDatesAndNumbersAndYearsAndMonthsAndHoursAndEverythingWeParsedSoFarBUTJoinedANDWithThe_And_Word__ormaybenot__BeforeTheLastDurationUnit = EverythingAllDatesAndNumbersAndYearsAndMonthsAndHoursAndEverythingWeParsedSoFarBUTJoinedWithoutTheLastDurationUnit + ` and ${last}`
    } else EverythingAllDatesAndNumbersAndYearsAndMonthsAndHoursAndEverythingWeParsedSoFarBUTJoinedANDWithThe_And_Word__ormaybenot__BeforeTheLastDurationUnit = strsArray[0]

    return EverythingAllDatesAndNumbersAndYearsAndMonthsAndHoursAndEverythingWeParsedSoFarBUTJoinedANDWithThe_And_Word__ormaybenot__BeforeTheLastDurationUnit
  }
  if (!seconds) return 'now'
  const date = new Date(seconds * 1000)
  const [calendar, time] = date.toISOString().split('T')
  const [dateYear, , dateDay] = calendar.split('-')
  // Parsing Calendar
  const years = dateYear - 1970
  const days = parseInt((date.getTime() - new Date(0).getTime()) / (1000 * 60 * 60 * 24)) % 365
  // Parsing time
  const [hours, mins, secs] = time.split(/:|\./g)

  return joinEverythingAllDatesAndNumbersAndYearsAndMonthsAndHoursAndEverythingWeParsedSoFar(years, days, parseInt(hours), parseInt(mins), parseInt(secs))
}
