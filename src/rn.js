import fs from "fs/promises";
import path from "path";

import { ERROR_TEXT } from "./utils/errorsText.js";

export async function rn(targetFilePath, newFileName) {
  console.log(targetFilePath);
  const currentDirectory = path.dirname(targetFilePath);
  const newPathFile = path.join(currentDirectory, newFileName);
  try {
    await fs.rename(targetFilePath, newPathFile);
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
