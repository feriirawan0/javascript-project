const { resolve } = require("path");
const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal memebaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile(resolve(__dirname, "notes.txt"), "UTF-8", fileReadCallback);
