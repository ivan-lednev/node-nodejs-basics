import { Worker } from "node:worker_threads";
import * as os from "os";

const performCalculations = async () => {
  const promises = os.cpus().map(
    (cpu, index) =>
      new Promise((resolve, reject) => {
        const worker = new Worker("./src/wt/worker.js");

        worker.on("message", (message) => {
          resolve(message);
          worker.unref();
        });

        worker.on("error", (error) => {
          reject(error);
          worker.unref();
        });

        const fibonacciNumber = 10 + index;
        worker.postMessage(fibonacciNumber);
      })
  );

  const result = (await Promise.allSettled(promises)).map(
    ({ status, value }) => {
      if (status === "fulfilled") {
        return { status: "resolved", data: value };
      }

      return { status: "error", data: null };
    }
  );

  console.log(result);
};

await performCalculations();
