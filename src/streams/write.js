import * as fs from "fs";

const write = async () => {
  const destination = fs.createWriteStream(
    "src/streams/files/fileToWrite.txt",
    {
      encoding: "utf-8",
    }
  );

  process.stdin.pipe(destination)
};

await write();
