import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const source = fs.createReadStream("src/zip/files/archive.gz");
  const destination = fs.createWriteStream("src/zip/files/fileToCompress.txt");
  const gzip = zlib.createUnzip();
  source.pipe(gzip).pipe(destination);
};

await decompress();
