
// Create a small readiness gate for students before they move to the next practice step.

// Rules:
// - Return READY only when all three flags are true.
// - Return BLOCKED otherwise.
// - Do not coerce strings like "true"; use boolean values.
function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
  return hasSetup === true &&
    hasPractice === true &&
    hasNotes === true
    ? "READY"
    : "BLOCKED";
}
checkJsBasicsReadinessGate(true, true, true);