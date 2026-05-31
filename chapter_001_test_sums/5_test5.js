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
  console.log(c);
}
console.log(countPassingJsBasicsChecks("character","stand_alone","pass","pass","fail"));
