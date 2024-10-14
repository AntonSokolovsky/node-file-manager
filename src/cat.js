import { createReadStream } from "fs";
import { ERROR_TEXT } from "./utils/errorsText.js";
import path from "path";

export async function cat(filePath) {
  const sourceFilePath = path.resolve(process.cwd(), filePath);
  const stream = createReadStream(sourceFilePath, "utf-8");

  let data = "";

  stream.on("data", (chunk) => (data += chunk));
  stream.on("end", () => console.log(data));
  stream.on("error", () => console.log(ERROR_TEXT.operationFailed));
}
