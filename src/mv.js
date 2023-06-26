import { renameSync } from 'fs'
import { basename, join } from 'path'

export const mv = (sourcePath, destinationPath) => {
  const fileName = basename(sourcePath);
  const destination = join(destinationPath, fileName);

  try {
    renameSync(sourcePath, destination);
    console.log(`File '${fileName}' moved successfully to '${destinationPath}'.`);
  } catch (err) {
    console.error(`Error moving file '${fileName}': ${err.message}`);
  }
}
