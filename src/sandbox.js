import * as fs from "fs";

const descriptor = fs.createWriteStream("test.txt");

descriptor.write("hello\n");
