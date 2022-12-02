import { parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (message) => {
  const number = nthFibonacci(Number.parseInt(message));
  parentPort.postMessage(number);
};

parentPort.on("message", sendResult);
