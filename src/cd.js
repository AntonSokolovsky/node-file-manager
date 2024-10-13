import { resolve } from "path";
import { ERROR_TEXT } from "./utils/errorsText.js";

const { chdir, cwd } = process;

export async function cd(newDirectory) {
  try {
    chdir(resolve(cwd(), newDirectory));
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
