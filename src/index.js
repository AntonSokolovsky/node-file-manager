import { homedir } from "os";
import readline from "readline";
import { up } from "./up.js";
import { printCurrentDir } from "./utils/printCurrentDir.js";
import { cd } from "./cd.js";

const { stdin, stdout, argv, chdir } = process;

const username =
  argv.find((arg) => arg.startsWith("--username="))?.split("=")[1] ||
  "Anonymous";
console.log(`Welcome to the File Manager, ${username}!`);

chdir(homedir());

printCurrentDir();

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.on("line", async (input) => {
  const [command, ...args] = input.trim().split(" ");
  if (command === "up") {
    up();
    printCurrentDir();
  } else if (command === "cd") {
    cd(args[0]);
    printCurrentDir();
  }
});

rl.on("close", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
