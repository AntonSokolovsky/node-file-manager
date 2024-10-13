import { createReadStream } from "fs";
import { ERROR_TEXT } from "./utils/errorsText.js";

export async function cat(path) {
  const stream = createReadStream(path, "utf-8");

  let data = "";

  stream.on("data", (chunk) => (data += chunk));
  stream.on("end", () => console.log(data));
  stream.on("error", () => console.log(ERROR_TEXT.operationFailed));
}
