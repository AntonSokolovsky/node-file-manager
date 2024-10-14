import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { ERROR_TEXT } from "./utils/errorsText.js";

export async function cp(pathToFile, pathToNewDir) {
  const sourceFilePath = path.resolve(process.cwd(), pathToFile);
  const destFilePath = path.resolve(process.cwd(), pathToNewDir);
  const targetFileName = path.basename(sourceFilePath);
  const newPathFile = path.join(destFilePath, targetFileName);

  try {
    const readStream = createReadStream(sourceFilePath);
    const writeStream = createWriteStream(newPathFile);
    readStream.pipe(writeStream);
    readStream.on("error", () => console.log(ERROR_TEXT.operationFailed));
    writeStream.on("error", () => console.log(ERROR_TEXT.operationFailed));
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
