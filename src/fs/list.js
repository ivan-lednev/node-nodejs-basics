import {readdir} from "node:fs/promises";

const list = async () => {
  try {
    console.log(await readdir('src/fs/files'))
  } catch (error) {
    throw new Error("FS operation failed")
  }
};

await list();