import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { ERROR_TEXT } from "./utils/errorsText.js";

export async function cp(pathToFile, pathToNewDir) {
  const targetFileName = path.basename(pathToFile);
  const newPathFile = path.join(pathToNewDir, targetFileName);

  try {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(newPathFile);
    readStream.pipe(writeStream);
    readStream.on("error", () => console.log(ERROR_TEXT.operationFailed));
    writeStream.on("error", () => console.log(ERROR_TEXT.operationFailed));
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
