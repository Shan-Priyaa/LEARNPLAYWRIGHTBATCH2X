function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  return (suiteName.trim() +
    " | " +
    environment.toLowerCase() +
    " | build-" +
    buildNumber);
}
console.log(buildJsBasicsRunLabel("JS_Basics","Priyaa", 37));