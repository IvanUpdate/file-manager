import fs from "fs";
import zlib from "zlib";
import { basename, join, parse } from "path";

export const decompress = (sourcePath, destinationPath) => {
  const fileName = basename(sourcePath);
  const fileNameWithoutExt = parse(fileName).name;
  const destination = join(destinationPath, fileNameWithoutExt);

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destination);
  const brotliStream = zlib.createBrotliDecompress();

  readStream.pipe(brotliStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`File '${sourcePath}' decompressed successfully.`);
  });

  writeStream.on("error", (error) => {
    console.error(`Error decompressing file '${sourcePath}': ${error.message}`);
  });
};
