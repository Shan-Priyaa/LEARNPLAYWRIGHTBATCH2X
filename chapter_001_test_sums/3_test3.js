function classifyJsBasicsScore(score) {
  if (score >= 90)
  {
    return ("EXCELLENT");
  }
  
  else if (score >= 75 && score <= 89) {
    return ("GOOD");
  }
  else if (score >= 50 && score <=74) {
    return ("NEEDS_PRACTICE");
  }
  else if (Test_case_passed <= 50) {
    return ("REVISIT");
  }
}
console.log(classifyJsBasicsScore(78));