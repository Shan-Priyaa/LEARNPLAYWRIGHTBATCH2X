// Find the first critical bug title from a bug list.

// Rules:
// - Each bug has title and severity.
// - Return the title of the first bug with severity "critical".
// - Return "No critical bug" when none exists.

function findFirstCriticalJsBasicsBug(bugs) {
  for (let bug of bugs) {
    if (bug.severity === "critical") {
      return bug.title;
    }
  }

  return "No critical bug";
}
findFirstCriticalJsBasicsBug([{ "title": "Spacing issue", "severity": "low" }]);

// Rules:
// - Each bug has title and severity.
// - Return the title of the first bug with severity "critical".
// - Return "No critical bug" when none exists.