const fs = require("fs");

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;




fs.writeFile("index.html", generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out the index.html file to see the output.")
});