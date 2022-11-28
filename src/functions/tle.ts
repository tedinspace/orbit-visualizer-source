var satellite = require('satellite.js');


export function tle2satrec(line1:string, line2:string){
   let  SR = satellite.twoline2satrec(line1, line2)
    
   return SR
}

