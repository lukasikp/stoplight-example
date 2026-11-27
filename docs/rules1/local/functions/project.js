import { createRulesetFunction } from '@stoplight/spectral-core';

export default createRulesetFunction(
  {
    input: null,
    options: {
      type: "object",
      additionalProperties: false,

      properties: {
        exceptions: {
          type: "array",

          items: {
            type: "string"
          }
        }
      }
    },
  },
  // https://github.com/stoplightio/spectral/blob/develop/docs/guides/5-custom-functions.md#writing-functions
  function project(input, options, context) {},
);