function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
  const result = {
    ...defaultConfig,
    ...overrideConfig
  };

  if (result.retries === undefined) {
    result.retries = 0;
  }

  return result;
}

// Rules:
// - Override values must win.
// - If retries is missing from both objects, default it to 0.
// - Do not mutate the input objects.