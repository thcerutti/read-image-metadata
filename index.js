const { getInputParams, validateInputParams } = require("./inputParams");
const { processFileMetadata } = require("./processFileMetadata");

const inputParams = getInputParams();
const errors = validateInputParams(inputParams);
if (errors.length > 0) {
  console.error("ERRORS:", errors);
  return;
}

processFileMetadata(inputParams)
