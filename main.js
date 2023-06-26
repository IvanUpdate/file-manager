import { homedir } from "os";
import { dir } from './src/dir.js'
import { up } from './src/up.js'
import { add_file } from "./src/add.js";
import { cd } from "./src/cd.js";
import { rn } from "./src/rn.js"
import { ls } from "./src/ls.js"
import { cat } from "./src/cat.js"
import readline from "node:readline";

const main = async () => {
  try {
    process.chdir(homedir());
    const username = process.argv
      .filter((arg) => arg.startsWith("--username="))[0]
      .split("=")[1];
    console.log(`Welcome to the File Manager, ${username}!`)
    dir()

    const rl = readline.createInterface(process.stdin, process.stdout)

    rl.on("line", (input) => {
      console.log(`Received: ${input}`)
      const [command , ...args] = input.toString().trim().split(" ");
      switch(command){
        case "up":
          up()
          dir()
          break
        case "add":
          add_file(args[0])
          dir()
          break 
        case "cd":
            cd(args[0])
            dir()
            break
        case "rn":
          rn(args[0], args[1])
          dir()
          break
        case "ls":
          ls()
          dir()
          break
        case "cat":
          cat(args[0])
          dir()
          break 
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
