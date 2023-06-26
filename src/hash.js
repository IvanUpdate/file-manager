import fs from 'fs';
import crypto from 'crypto';

export const hash = (filePath) => {
  const hash = crypto.createHash('sha256');
  const fileStream = fs.createReadStream(filePath);

  fileStream.on('data', (data) => {
    hash.update(data);
  });

  fileStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(`Hash for file '${filePath}': ${fileHash}`);
  });

  fileStream.on('error', (error) => {
    console.error(`Error calculating hash for file '${filePath}': ${error.message}`);
  });
}

