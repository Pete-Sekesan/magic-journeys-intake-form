/**
 * Returns a query parameter string built from the request
 * arguments, but stripped from any token.
 *
 * Return string is on the format 'key=value&key2=value2'.
 */
function getCleanParameterString (request) {
  const args = request.args;

  const sortedArguments = {};

  Object.keys(args)
    .sort()
    .forEach((key) => {
      sortedArguments[key] = args[key];
    });

  let service_params = '';

  for (const key in sortedArguments) {
    if (key !== 'token') {
      service_params += service_params
        ? `&${key}=${sortedArguments[key]}`
        : `${key}=${sortedArguments[key]}`;
    }
  }

  return service_params;
}

/**
 * Returns the token from the request arguments, or
 * the empty string if no token was used.
 */
function getRequestToken (request) {
  return request.args.token || '';
}

export default { getCleanParameterString, getRequestToken };
