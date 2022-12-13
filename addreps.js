const fs = require('fs');

const routines = require('./mygainz/src/data/routines.json');

for (let r = 0; r < routines.length; r++) {
  for (let d = 0; d < routines[r].days.length; d++) {
    for (let i = 0; i < routines[r].days[d].exercises.length; i++) {
      routines[r].days[d].exercises[i] = {
        id: routines[r].days[d].exercises[i],
        reps: 0,
        sets: 0,
        weight: 0
      };
    }
  }
}

console.log(routines[0].days[0].exercises);

formatted = JSON.stringify(routines);


fs.writeFileSync('/Users/loosh/Desktop/Code/School/2022-2023/Web App/cmsi2021-myGainz/mygainz/src/data/routines2.json', formatted);