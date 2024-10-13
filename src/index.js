import { homedir } from "os";
import readline from "readline";
import { up } from "./up.js";
import { printCurrentDir } from "./utils/printCurrentDir.js";
import { cd } from "./cd.js";
import { ERROR_TEXT } from "./utils/errorsText.js";

const { stdin, stdout, argv, chdir } = process;

const username =
  argv.find((arg) => arg.startsWith("--username="))?.split("=")[1] ||
  "Anonymous";
console.log(`Welcome to the File Manager, ${username}!`);

chdir(homedir());

printCurrentDir();

const commandMap = new Map([
  ["up", up],
  ["cd", cd],
]);

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.on("line", async (input) => {
  const [command, ...args] = input.trim().split(" ");
  const commandsHandler = commandMap.get(command);
  if (commandsHandler) {
    commandsHandler(...args);
  } else {
    console.log(ERROR_TEXT.invalidInput);
  }
  printCurrentDir();
});

rl.on("close", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
