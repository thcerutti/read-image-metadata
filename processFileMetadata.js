var exifr = require("exifr");
const { readdirSync, writeFileSync } = require("fs");

const processFileMetadata = (inputParams) => {
  const files = readdirSync(inputParams.path);

  const readFilePromises = files.map(async (fileName) => ({
    fileName: `${inputParams.path}/${fileName}`,
    data: await exifr.parse(`${inputParams.path}/${fileName}`)
  }));


  Promise.all(readFilePromises).then((data) => {
    const extractedInfo = data.map(info => ({
      fileName: info.fileName,
      prompt: info.data[inputParams.prop]
    }))
    console.info(`[${extractedInfo.length} files processed]`)
    writeFileSync(inputParams.output, JSON.stringify(extractedInfo, null, 2))
    console.info(`[results have been written to '${inputParams.output}' file]`)
  })

};

module.exports = { processFileMetadata };
