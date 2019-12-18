/**
 * Returns whether the given url is a web address beginning
 * with http:// or https://
 * @param {string} url The url input
 */
export function isValidUrl(url) {
  var validatorPattern = /^https?:\/\/[\d\w]+/;
  return validatorPattern.test(url);
}
