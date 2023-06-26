import { homedir } from "os";
import { check_start } from "./check_start";
import { dir } from './src/dir.js'
import { up } from './src/up.js'
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
      switch(input){
        case "up":
          up()
          dir()
          break
        case check_start(input, "add"):
          
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
