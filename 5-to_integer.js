const args = process.argv.slice(2);
const num = Number(args[0]);

if (!isNaN(num) && args[0] !== undefined && args[0].trim() !== "") {
  console.log(`My number: ${parseInt(num)}`);
} else {
  console.log("Not a number");
}
