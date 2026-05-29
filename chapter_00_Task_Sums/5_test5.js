function countPassingJsBasicsChecks(results) {
  let c = 0;
  for (let result of results)
  {
    if (result.toLowerCase().includes("pass"))
    {
      c++;
    }
  }
  return c;
}