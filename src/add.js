import fs from "fs/promises";
import { ERROR_TEXT } from "./utils/errorsText.js";

export async function add(fileName) {
  try {
    await fs.writeFile(fileName, "");
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
