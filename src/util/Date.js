export function currentDate() {
    /** Change to include formating and timezones, what in JS is similar to JodaTime */
    var date = { currentTime: new Date().toLocaleString() };
  
    /* this.setState({
      date: date
    });*/
    console.log("date: " + date)
    return date;
  }