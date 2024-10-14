import fs from "fs/promises";
import { ERROR_TEXT } from "./utils/errorsText.js";
import path from "path";

export async function rm(filePath) {
  const sourceFilePath = path.resolve(process.cwd(), filePath);
  try {
    await fs.unlink(sourceFilePath);
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
