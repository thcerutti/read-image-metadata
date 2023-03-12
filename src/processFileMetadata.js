var exifr = require("exifr");
const { readdirSync, writeFileSync } = require("fs");

const processFileMetadata = async (inputParams) => {
  const files = readdirSync(inputParams.path);

  const readFilePromises = files.map(async (fileName) => ({
    fileName: `${inputParams.path}/${fileName}`,
    data: await exifr.parse(`${inputParams.path}/${fileName}`),
  }));

  return await Promise.all(readFilePromises);
};

module.exports = { processFileMetadata };
