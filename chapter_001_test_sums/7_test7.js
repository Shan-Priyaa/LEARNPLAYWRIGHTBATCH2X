function summarizeJsBasicsResults(results) 
{
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  for (let result of results)
  {
    result=result.toLowerCase();

    if (result.includes("pass")) {
      passed++;
    } else if (result.includes("fail")) {
      failed++;
    } else if (result.includes("skip")) {
      skipped++;
    }
  }
  
console.log(passed);
console.log(failed);
console.log(skipped);
}
summarizeJsBasicsResults(["PASS", "fail", "skip", "Pass", "FAIL"]);



// Rules:
// - Count total items.
// - Count items containing pass, fail, and skip.
// - Return an object with total, passed, failed, skipped.