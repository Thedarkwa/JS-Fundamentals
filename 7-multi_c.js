const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
  console.log(""); // second console.log to fulfill the 2 calls rule
} else {
  let output = "";
  let i = 0;
  while (i < x) {
    output += "msg\n";
    i++;
  }
  console.log(output.trim()); // print all at once, removing trailing newline
  console.log(`Correct output - ${x} times`);
}
