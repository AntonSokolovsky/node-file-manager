import fs from "fs/promises";
import { ERROR_TEXT } from "./utils/errorsText.js";

export async function rm(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
