function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  return (suiteName.trim() +
    " | " +
    environment.toLowerCase() +
    " | build-" +
    buildNumber);
}
console.log(buildJsBasicsRunLabel("JS_Basics","Priyaa", 37));

// Rules:
// - Trim the suite name.
// - Lowercase the environment.
// - Append build number as build-N.
// - Join the three parts with " | ".
