import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

const calculateHash = async () => {
  const hash = createHash("sha256");
  createReadStream("src/hash/files/fileToCalculateHashFor.txt")
    .pipe(hash)
    .on("finish", () => console.log(hash.digest("hex")));
};

await calculateHash();
