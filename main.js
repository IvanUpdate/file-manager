import { homedir } from "os";
import { dir } from "./src/dir.js";
import { up } from "./src/up.js";
import { add_file } from "./src/add.js";
import { cd } from "./src/cd.js";
import { rn } from "./src/rn.js";
import { ls } from "./src/ls.js";
import { cat } from "./src/cat.js";
import { cp } from "./src/cp.js";
import { mv } from "./src/mv.js";
import { rm } from "./src/rm.js";
import { os_info } from "./src/os.js";
import { hash } from "./src/hash.js";
import readline from "node:readline";
import { compress } from "./src/compress.js";
import { decompress } from "./src/decompress.js";

const main = async () => {
  try {
    process.chdir(homedir());
    const username = process.argv
      .filter((arg) => arg.startsWith("--username="))[0]
      .split("=")[1];
    console.log(`Welcome to the File Manager, ${username}!`);
    dir();

    const rl = readline.createInterface(process.stdin, process.stdout);

    rl.on("line", (input) => {
      console.log(`Received: ${input}`);
      const [command, ...args] = input.toString().trim().split(" ");
      switch (command) {
        case "up":
          up();
          dir();
          break;
        case "add":
          add_file(args[0]);
          dir();
          break;
        case "cd":
          cd(args[0]);
          dir();
          break;
        case "rn":
          rn(args[0], args[1]);
          dir();
          break;
        case "ls":
          ls();
          dir();
          break;
        case "cat":
          cat(args[0]);
          dir();
          break;
        case "cp":
          cp(args[0], args[1]);
          dir();
          break;
        case "mv":
          mv(args[0], args[1]);
          dir();
          break;
        case "rm":
          rm(args[0]);
          dir();
          break;
        case "os":
          os_info(args[0]);
          dir();
          break;
        case "hash":
          hash(args[0]);
          dir();
          break;
        case "compress":
          compress(args[0], args[1]);
          dir();
          break;
        case "decompress":
          decompress(args[0], args[1]);
          dir();
          break;
        default:
          console.log("Unknown command");
          break;
      }
    })
      .on("SIGINT", () => {
        rl.close();
      })
      .on("close", () => {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      });
  } catch (error) {
    console.error(error.message);
  }
};

main();
