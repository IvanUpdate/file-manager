import { rename } from "fs";
import { dirname, join } from "path";

export const rn = (path, fileName) => {
  try {
    const current_dir = dirname(path)
    rename(path, join(current_dir, fileName), function (err) {
      if (err) throw err;
      console.log("File Renamed.");
    });
  } catch (error) {
    console.log(error.message);
  }
};
