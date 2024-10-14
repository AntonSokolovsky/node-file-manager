import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";
import path from "path";
import { pipeline } from "stream/promises";
import { ERROR_TEXT } from "./utils/errorsText.js";

export const compress = async (pathToFile, pathToDestination) => {
  const sourceFilePath = path.join(process.cwd(), pathToFile);
  const fileName = path.basename(sourceFilePath);
  const destFilePath = path.join(
    process.cwd(),
    pathToDestination,
    `${fileName}.br`
  );

  const input = createReadStream(sourceFilePath);
  const output = createWriteStream(destFilePath);
  const brotli = createBrotliCompress();

  try {
    await pipeline(input, brotli, output);
  } catch (error) {
    console.error(ERROR_TEXT.operationFailed);
  }
};
