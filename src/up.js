import { resolve } from "path";

const { chdir, cwd } = process;
export function up() {
  const currentDirectory = cwd();
  const parentDirectory = resolve(currentDirectory, "..");
  chdir(parentDirectory);
}
