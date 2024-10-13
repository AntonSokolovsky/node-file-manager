import { homedir } from "os";
import readline from "readline";
import { up } from "./up.js";
import { printCurrentDir } from "./utils/printCurrentDir.js";
import { cd } from "./cd.js";
import { ERROR_TEXT } from "./utils/errorsText.js";
import { ls } from "./ls.js";
import { cat } from "./cat.js";
import { add } from "./add.js";
import { rn } from "./rn.js";
import { cp } from "./cp.js";

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
  ["ls", ls],
  ["cat", cat],
  ["add", add],
  ["rn", rn],
  ["cp", cp],
]);

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

rl.on("line", async (input) => {
  const [command, ...args] = input.trim().split(" ");
  const commandsHandler = commandMap.get(command);
  if (commandsHandler) {
    await commandsHandler(...args);
  } else {
    console.log(ERROR_TEXT.invalidInput);
  }
  await printCurrentDir();
});

rl.on("close", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
