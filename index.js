const { getInputParams, validateInputParams } = require("./src/inputParams");
const { processFileMetadata } = require("./src/processFileMetadata");
const { writeFileSync, appendFileSync } = require("fs");

const inputParams = getInputParams();
const errors = validateInputParams(inputParams);
if (errors.length > 0) {
  console.error("ERRORS:", errors);
  return;
}

const logFileName = "output.log";

processFileMetadata(inputParams)
  .then((metadataContent) => {
    const formattedContent = metadataContent
      .map((item) => item.data.parameters.split("\n")[0])
      .join("\n");
    try {
      writeFileSync(inputParams.output, formattedContent);
      console.info(`[${metadataContent.length} files processed]`);
      console.info(
        `[results have been written to '${inputParams.output}' file]`
      );
    } catch (error) {
      appendFileSync(`./${logFileName}`, JSON.stringify(error).concat("\n\r"));
      console.error(`ERROR: could not write to path ${inputParams.output}`);
    }
  })
  .catch((error) => {
    appendFileSync(`./${logFileName}`, JSON.stringify(error));
    console.error(
      `Houston, we have a problem! Logs were saved to ./${logFileName}}`
    );
  });
