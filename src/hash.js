import path from "path";
import { createHash } from "crypto";
import { ERROR_TEXT } from "./utils/errorsText.js";
import { createReadStream } from "fs";

export async function hash(pathToFile) {
  try {
    const targetPathFile = path.resolve(process.cwd(), pathToFile);
    const hash = createHash("sha256");
    const stream = createReadStream(targetPathFile);
    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    stream.on("end", () => {
      const hashHex = hash.digest("hex");
      console.log(`HashHex: ${hashHex}`);
    });

    stream.on("error", (err) => {
      console.error("Error!", err.message);
    });
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
