import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";
import path from "path";
import { pipeline } from "stream/promises";
import { ERROR_TEXT } from "./utils/errorsText.js";

export const decompress = async (pathToFile, pathToDestination) => {
  const sourceFilePath = path.join(process.cwd(), pathToFile);
  const fileName = path.basename(sourceFilePath);
  const originalFileName = fileName.replace(/\.br$/, "");
  const destFilePath = path.join(
    process.cwd(),
    pathToDestination,
    originalFileName
  );

  const input = createReadStream(sourceFilePath);
  const output = createWriteStream(destFilePath);
  const brotli = createBrotliDecompress();

  try {
    await pipeline(input, brotli, output);
  } catch (error) {
    console.error(ERROR_TEXT.operationFailed);
  }
};
