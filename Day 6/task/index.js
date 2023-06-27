const fs = require('fs');

// Read the contents of states.txt
const states = fs.readFileSync('state.txt', 'utf8').split('\r\n');

// Read the contents of capitals.txt
const capitals = fs.readFileSync('capital.txt', 'utf8').split('\r\n');

// Combine the state and capital data
const stateCapitalData = states.map((state, index) => `${state} - ${capitals[index]}`);


// console.log(states,capitals,stateCapitalData);
// Write the combined data to a new file called state_capitals.txt
fs.writeFileSync('statecapital.txt', stateCapitalData.join('\n'));
