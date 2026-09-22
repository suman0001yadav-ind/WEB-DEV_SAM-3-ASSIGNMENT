const fs = require("fs");

fs.writeFile("demo.txt", "Hello", () => {
  console.log("File Created");

  fs.readFile("demo.txt", "utf8", (err, data) => {
    console.log(data);

    fs.appendFile("demo.txt", "\nUpdated", () => {
      console.log("File Updated");

      fs.unlink("demo.txt", () => {
        console.log("File Deleted");
      });
    });
  });
});