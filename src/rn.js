import fs from "fs/promises";
import path from "path";

import { ERROR_TEXT } from "./utils/errorsText.js";

export async function rn(targetFilePath, newFileName) {
  const sourceFilePath = path.resolve(process.cwd(), targetFilePath);
  const currentDirectory = path.dirname(sourceFilePath);
  const newPathFile = path.join(currentDirectory, newFileName);
  try {
    await fs.rename(sourceFilePath, newPathFile);
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
