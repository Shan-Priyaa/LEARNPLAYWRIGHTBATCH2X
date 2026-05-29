function summarizeJsBasicsResults(results) {
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  for (results of results)
  {
    result + result.toLowerCase();
    if (result.includes("pass")) {
      passed++;
    } else if (result.includes("fail")) {
      failed++;
    } else if (result.includes("skip")) {
      skipped++;
    }
  }
  
}
console.log(summarizeJsBasicsResult(["PASS", "fail", "skip", "Pass", "FAIL"])
);