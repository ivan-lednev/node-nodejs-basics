import * as zlib from "zlib";
import fs from "fs";

const compress = async () => {
  const source = fs.createReadStream("src/zip/files/fileToCompress.txt");
  const destination = fs.createWriteStream("src/zip/files/archive.gz");
  const gzip = zlib.createGzip();
  source.pipe(gzip).pipe(destination);
};

await compress();
