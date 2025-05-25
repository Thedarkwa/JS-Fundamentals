const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
  console.log(""); // 2nd console.log to ensure exactly two are used
} else {
  let i = 0;
  let output = "";
  while (i < x) {
    output += "C is fun\n";
    i++;
  }
  console.log(output.trim()); // prints nothing if x <= 0
  console.log(""); // 2nd console.log
}
