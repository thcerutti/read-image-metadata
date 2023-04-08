var exifr = require("exifr");
const { readdirSync } = require("fs");
const path = require("path");

const processFileMetadata = async (inputParams) => {
  const files = readdirSync(inputParams.path).filter(
    (file) => path.extname(file).toLowerCase() === ".png"
  );

  const readFilePromises = files.map(async (fileName) => ({
    fileName: `${inputParams.path}/${fileName}`,
    data: await exifr.parse(`${inputParams.path}/${fileName}`),
  }));

  return await Promise.all(readFilePromises);
};

module.exports = { processFileMetadata };
