import { join, basename } from 'path'
import { readFileSync, writeFileSync } from 'fs';

export const cp = (sourcePath, destinationPath) => {
  const fileName = basename(sourcePath);
  const destination = join(destinationPath, fileName);

  try {

    const fileData = readFileSync(sourcePath);
    
    writeFileSync(destination, fileData);

    console.log(`File '${fileName}' copied successfully to '${destinationPath}'.`);
  } catch (err) {
    console.error(`Error copying file '${fileName}': ${err.message}`);
  }
}
