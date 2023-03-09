const { existsSync } = require("fs");

const getInputParams = () => {
  const myObj = {};
  process.argv.splice(2).map((arg) => {
    const [a, b] = arg.substring(2).split(":");
    myObj[a] = b;
  });
  return myObj;
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
