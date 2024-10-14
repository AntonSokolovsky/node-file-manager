import fs from "fs/promises";
import { ERROR_TEXT } from "./utils/errorsText.js";
import path from "path";

export async function add(fileName) {
  const sourceFilePath = path.resolve(process.cwd(), fileName);
  try {
    await fs.writeFile(sourceFilePath, "");
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
