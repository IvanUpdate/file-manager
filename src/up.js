import { homedir } from "os";

export const up = () => {
  try {
    const current_dir = process.cwd()
    if (current_dir == homedir) {
      console.log("You are in the root directory! Can't go up");
    } else { 
        const new_dir = current_dir.substring(
            0,
            current_dir.lastIndexOf("/")
          )
        process.chdir(new_dir);
    }
  } catch (error) {
    console.error(error.message);
  }
};
