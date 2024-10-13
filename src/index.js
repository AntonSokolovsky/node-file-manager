import { homedir } from "os";
import readline from "readline";
import path from "path";

const { stdin, stdout, argv, cwd, chdir } = process;

const username =
  argv.find((arg) => arg.startsWith("--username="))?.split("=")[1] ||
  "Anonymous";
console.log(`Welcome to the File Manager, ${username}!`);

chdir(homedir());

console.log(`You are currently in ${cwd()}`);

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.on("line", async (input) => {
  if (input === "up") {
    const currentDirectory = cwd();
    const parentDirectory = path.resolve(currentDirectory, "..");
    chdir(parentDirectory);
    console.log(`You are currently in ${cwd()}`);
  }
});

rl.on("close", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
