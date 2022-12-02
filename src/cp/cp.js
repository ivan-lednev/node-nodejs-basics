import * as cp from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = cp.fork("./src/cp/files/script.js", args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  childProcess.stdout.pipe(process.stdout);
  process.stdin.pipe(childProcess.stdin);

  childProcess.send("Sending a message to a child process...");

  childProcess.on("message", (message) => {
    console.log(`Parent process received a message: ${message}`);
  });
};

await spawnChildProcess(["first-arg", "second-arg"]);
