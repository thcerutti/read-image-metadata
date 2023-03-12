const { getInputParams, validateInputParams } = require("./src/inputParams");
const { processFileMetadata } = require("./src/processFileMetadata");
const { writeFileSync } = require("fs");

const inputParams = getInputParams();
const errors = validateInputParams(inputParams);
if (errors.length > 0) {
  console.error("ERRORS:", errors);
  return;
}

const logFileName = "output.log";

try {
  processFileMetadata(inputParams).then((metadataContent) => {
    console.log(metadataContent);
    console.info(`[${metadataContent.length} files processed]`);

    const formattedContent = metadataContent
      .map((item) => item.data.parameters.split("\n")[0])
      .join("\n\r");
    writeFileSync(inputParams.output, formattedContent);
    console.info(`[results have been written to '${inputParams.output}' file]`);
  });
  throw "eeepaaaaa";
} catch (error) {
  writeFileSync(`./${logFileName}`, error);
  console.error(
    `Houston, we have a problem! Logs were saved to ./${logFileName}}`
  );
}
