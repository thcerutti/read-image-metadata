const { getInputParams, validateInputParams } = require("./src/inputParams");
const { processFileMetadata } = require("./src/processFileMetadata");

const inputParams = getInputParams();
const errors = validateInputParams(inputParams);
if (errors.length > 0) {
  console.error("ERRORS:", errors);
  return;
}

processFileMetadata(inputParams)
