import { createReadStream, existsSync } from "fs";

export const cat = (filePath) => {
  try {
    if (existsSync(filePath)) {
      const stream = createReadStream(filePath, "utf-8")
      stream.on("error", (error) => {
        if (error.code === "ENOENT") {
          console.error("The file does not exist")
          return
        }
        throw error
      });
      stream.on("data", (data) => {
        process.stdout.write(data);
      });
    } else {
      console.error("no such file");
    }
  } catch (error) {
    console.log(error.message)
  }
}
