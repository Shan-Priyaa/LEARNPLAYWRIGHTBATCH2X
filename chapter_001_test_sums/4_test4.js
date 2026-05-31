function getJsBasicsKeywordMeaning(term) {
  const term1 = {
    variable: "stores a value",
    string: "text data",
    number: "numeric value",
    boolean: "true or false",
    array: "ordered collection of values",
    object: "collection of key-value pairs",
    function: "reusable block of code"
  };
  term = term.trim().toLowerCase();
  return term1[term] || "unknown";
}
console.log(getJsBasicsKeywordMeaning("variable"));