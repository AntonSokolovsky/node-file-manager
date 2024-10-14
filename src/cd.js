import { resolve } from "path";
import { ERROR_TEXT } from "./utils/errorsText.js";
import path from "path";

const { chdir, cwd } = process;

export async function cd(newDirectory) {
  const newDirectoryPath = path.resolve(process.cwd(), newDirectory);
  try {
    chdir(resolve(cwd(), newDirectoryPath));
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
