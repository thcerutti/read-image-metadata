const { existsSync } = require("fs");

const getInputParams = () => {
  const inputParams = {};
  process.argv.splice(2).map((arg) => {
    console.log(arg);
    const colonPosition = arg.indexOf(":");
    const key = arg.substring(0, colonPosition);
    const value = arg.substring(colonPosition + 1);
    inputParams[key] = value;
  });
  return inputParams;
};

const validateInputParams = (input) => {
  const invalidParameter = (paramName) =>
    `'${paramName}' parameters not present`;
  const invalidPath = (path) => `path '${path}' is invalid or unaccessible`;

  const validationErrors = [];
  if (!input) validationErrors.push("No valid input");
  if (!input.prop) validationErrors.push(invalidParameter("prop"));

  if (!input.path) validationErrors.push(invalidParameter("path"));
  if (!existsSync(input.path)) validationErrors.push(invalidPath(input.path));

  if (!input.output) validationErrors.push(invalidParameter("output"));

  return validationErrors;
};

module.exports = { getInputParams, validateInputParams };
