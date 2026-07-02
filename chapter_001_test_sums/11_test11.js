function summarizeJsBasicsMatrix(matrix) {
  let arr = matrix.flat();
  let failedCases = arr.filter(x => x.includes("-fail"));

  return {
    total: arr.length,
    passed: arr.filter(x => x.includes("-pass")).length,
    failed: failedCases.length,
    failedCases: failedCases
  };
}
summarizeJsBasicsMatrix([["login-pass"], ["checkout-fail"]]);


// Rules:
// - The input is an array of arrays.
// - Each cell is a result string.
// - Count total, passed, failed, and collect failedCases.
