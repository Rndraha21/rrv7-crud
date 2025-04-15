import fs from "fs";
import path from "path";

const srcDir = path.resolve("build", "server");
const destDir = path.resolve("build", "server");
const hashedDir = fs.readdirSync(srcDir).find((dir) => dir.startsWith("nodejs_"));

if (!hashedDir) {
  console.error("Hashed SSR server directory not found");
  process.exit(1);
}

const srcFile = path.join(srcDir, hashedDir, "index.js");
const destFile = path.join(destDir, "index.js");

fs.copyFileSync(srcFile, destFile);
console.log(`Copied SSR server entry from ${srcFile} to ${destFile}`);
