import os from "os";

export const os_info = (action) => {
  try {
    switch (action) {
      case "--EOL":
        const eol = os.EOL;
        console.log(`Default End-Of-Line character: ${JSON.stringify(eol)}`);
        break;

      case "--cpus":
        const cpus = os.cpus();
        const cpuCount = cpus.length;
        console.log(`Number of CPUs: ${cpuCount}`);
        cpus.forEach((cpu, index) => {
          const { model, speed } = cpu;
          console.log(
            `CPU ${index + 1}: Model - ${model}, Clock Rate - ${
              speed / 1000
            } GHz`
          );
        });
        break;

      case "--homedir":
        console.log(`Home directory is ${os.homedir()}`);
        break;

      case "--username":
        console.log(`System user name is ${os.userInfo().username}`);
        break;

      case "--architecture":
        const cpuArchitecture = process.arch;
        console.log(`Node.js CPU Architecture: ${cpuArchitecture}`);
        break;

      default:
        console.log("Unknown command")
        break;
    }
  } catch (error) {
    console.log(error.message);
  }
};
