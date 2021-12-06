function century(year) {

    if(year < 100){
     return 1
    }else{
        //if last two digits are == 00 
        //return the digits before the last two digits
        if(year % 100 == 00){
          let year_string = year.toString().slice(0,-2)
          let century = parseInt(year_string)
        //   return century
          console.log(century)
      }else{
          //if last two digits != to 00
          //return the digits before the 00 + 1
          let year_string = year.toString()
          let year_sliced = year_string.slice(0, -2) 
          let century = parseInt(year_sliced) + 1
        //   return century 
          console.log(century)
        }

    }
}