const fs = require('fs');

// Synchronous data finding

const txt = 'Learning Node..';

fs.writeFileSync('./hello.txt', txt);

const data = fs.readFileSync('./hello.txt', {encoding: 'utf-8'});

// Asynchronous data finding

console.log('t1');

let text = "node js";

fs.readFile('./hello.txt', {encoding : 'utf-8'}, (err, data)=> {
    if (err) {
        console.log('Something went wrong', err);
        return;
    }

    data = text;

    
    
})

fs.writeFile('./hello.txt', text, {encoding: 'utf-8'}, (err) => {
    if (err) {
        console.log('Something went wrong');
        return;
    }

    console.log('Write successfully');
    
})

console.log('t2');
