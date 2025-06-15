const fs = require("fs");

// Synchronous data finding

const txt = "Learning Node..";

fs.writeFileSync("./hello.txt", txt);

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

// Asynchronous data finding

let text = "node js";

// fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("Something went wrong", err);
//     return;
//   }

//   fs.writeFile("./hello-world.txt", text, { encoding: "utf-8" }, (err) => {
//     if (err) {
//       console.log("Something went wrong");
//       return;
//     }
//     console.log("Write successfully");
//   });
// });

const readStream = fs.createReadStream("./hello-world.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./hello.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
  console.log(data);

  writeStream.write(data, (err) => {
    if (err) {
      throw Error("error", err);
    }
  });
});

readStream.on("error", (err) => {
  if (err) {
    throw Error("error", err);
  }
});

writeStream.on("error", (err) => {
  if (err) {
    throw Error("error", err);
  }
});

readStream.on("end", () => {
    console.log("Reading Ended")
    writeStream.end()
})

writeStream.on("finish", () => {
    console.log("Written successfully")
})
