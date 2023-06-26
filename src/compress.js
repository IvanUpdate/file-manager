import fs from "fs";
import zlib from "zlib";
import { basename, join, parse } from "path";

export const compress = (sourcePath, destinationPath) => {
  const fileName = basename(sourcePath);
  const fileNameWithoutExt = parse(fileName).name;
  const destination = join(destinationPath, `${fileNameWithoutExt}.br`);

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destination);
  const brotliStream = zlib.createBrotliCompress();

  readStream.pipe(brotliStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`File '${sourcePath}' compressed successfully.`);
  });

  writeStream.on("error", (error) => {
    console.error(`Error compressing file '${sourcePath}': ${error.message}`);
  });
};
