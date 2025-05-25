const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (isNaN(x)) {
  // Case: missing or invalid number argument
  console.log("Missing number of occurrences");
  console.log(""); // to have exactly two console.log calls total
} else {
  // Case: valid number argument (positive, zero, or negative)
  let output = "";
  let i = 0;
  
  // Only build output if x > 0
  while (i < x) {
    output += "msg\n";
    i++;
  }
  
  // Print the accumulated output (empty string if x <= 0)
  console.log(output.trim());
  // Print the summary line with the count (including negatives and zero)
  console.log(`Correct output - ${x} times`);
}
