const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
  console.log(""); // second console.log to meet the "only two console.log" rule
} else {
  let i = 0;
  for (; i < x; i++) {
    console.log("C is fun");
  }
}
