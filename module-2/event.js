const { log } = require('node:console');
const eventEmitter = require('node:events');

class SchoolBell extends eventEmitter{};
const schoolBell = new SchoolBell();

schoolBell.on('ring', () => {
    console.log('Yahoo!! class ses'); 
});


schoolBell.on('ring', () => {
    console.log('Dath!! Arekta class ase');
})
schoolBell.on('broken', () => {
    console.log('Dhur! class ki ar ses hobe na...');
})

schoolBell.emit('ring');
schoolBell.emit('broken');