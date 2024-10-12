const { stdin, stdout, cwd } = process;

const username =
  process.argv.find((arg) => arg.startsWith("--username=")).split("=")[1] ||
  "Guest";
console.log(`Welcome to the File Manager, ${username}!`);

console.log(`You are currently in ${cwd()}`);
