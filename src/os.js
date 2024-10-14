import { EOL, cpus, homedir, userInfo, arch } from "os";
import { ERROR_TEXT } from "./utils/errorsText.js";

export function os(args) {
  const osCommands = new Map([
    ["--EOL", () => console.log(JSON.stringify(EOL))],
    [
      "--cpus",
      () => {
        console.log(`CPU Count: ${cpus().length}`);
        cpus().forEach((item, index) => {
          console.log(
            `CPU ${index + 1} - Model: ${item.model}, Clock rate: ${(
              item.speed / 1000
            ).toFixed(2)} GHz`
          );
        });
      },
    ],
    ["--homedir", () => console.log(homedir())],
    ["--username", () => console.log(userInfo().username)],
    ["--architecture", () => console.log(arch())],
  ]);
  const subCommand = osCommands.get(args);
  if (subCommand) {
    subCommand();
  } else {
    console.log(ERROR_TEXT.invalidInput);
  }
}
