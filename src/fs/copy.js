import {copyFile, readdir, mkdir} from 'node:fs/promises'
import {join} from 'node:path'

const oldDir = "src/fs/files"
const newDir = "src/fs/files_copy"

const copy = async () => {
  try {
    const filesToCopy = await readdir(oldDir)

    await mkdir(newDir)

    for (const file of filesToCopy) {
      const oldPath = join(oldDir, file)
      const newPath = join(newDir, file)
      await copyFile(oldPath, newPath)
    }
  } catch (error) {
    throw new Error("FS operation failed")
  }
};

await copy();