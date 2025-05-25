const args = process.argv.slice(2); // Skip 'node' and the script name

if (args.length === 0) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
