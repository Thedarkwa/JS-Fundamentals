const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (isNaN(x)) {
  // 1st console.log: print error message if first argument is not a number
  console.log("Missing number of occurrences");

  // 2nd console.log: print a blank line to fulfill the "exactly two console.log calls" rule
  console.log("");
} else {
  let output = "";
  let i = 0;

  // Loop runs x times to build a single string with "msg" repeated
  while (i < x) {
    output += "msg\n";
    i++;
  }

  // 1st console.log in the valid number case: print all repeated lines at once
  console.log(output.trim());

  // 2nd console.log in the valid number case: print the summary line
  console.log(`Correct output - ${x} times`);
}
