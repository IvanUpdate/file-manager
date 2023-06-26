import { unlinkSync } from 'fs'

export const rm = (filePath) => {
  try {
    unlinkSync(filePath);
    console.log(`File '${filePath}' deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting file '${filePath}': ${err.message}`);
  }
}
