const path = require("path");
const fs = require("fs")

const inputArgument = process.argv.slice(2);

const text = inputArgument.join(" ")

const timeStamp = new Date();
console.log(timeStamp)

const message = `${text}. Added At: ${timeStamp} \n`

if (!message) {
    console.log("❌ Provide some text");
    console.log("Example: Hello world")
    
}

const filePath = path.join(__dirname, "log.txt");

fs.appendFile(filePath, message, {encoding:"utf-8"}, () => {
    console.log("Your log added successfully");
});
