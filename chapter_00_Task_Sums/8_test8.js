function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  return suiteName.trim() +
    " | " +
    environment.toLowerCase() +
    " | build-" +
    buildNumber;
}
buildJsBasicsRunLabel("JS Basics,"Priyaa",37);