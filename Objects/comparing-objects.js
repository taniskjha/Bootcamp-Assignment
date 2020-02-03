// compare flight1 to flight2

var flight1 = {
    name: 'MH370', 
    maker:'Boeing', 
    model:'777',
    crashDate: '8.March.2014',
    location: 'Indian Ocean',
    cause:'Pilot Suicide' };

var flight2 = {
        name: 'MH370', 
        maker:'Boeing', 
        model:'777',
        crashDate: '8.March.2014',
        location: 'Indian Ocean',
        cause:'Pilot Suicide' };    


  console.log(flight1.stringify == flight2.stringify);     