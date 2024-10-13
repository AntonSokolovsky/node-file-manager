import fs from "fs/promises";
import { ERROR_TEXT } from "./utils/errorsText.js";

export async function ls() {
  try {
    const directoryEntries = await fs.readdir(process.cwd(), {
      withFileTypes: true,
    });
    const directories = directoryEntries.filter((file) => file.isDirectory());
    const files = directoryEntries.filter((file) => file.isFile());

    directories.sort((a, b) => a.name.localeCompare(b.name));
    files.sort((a, b) => a.name.localeCompare(b.name));
    const data = [...directories, ...files].map((item, index) => ({
      Name: item.name,
      Type: item.isDirectory() ? "Directory" : "File",
    }));
    console.table(data);
  } catch (error) {
    console.log(ERROR_TEXT.operationFailed);
  }
}
