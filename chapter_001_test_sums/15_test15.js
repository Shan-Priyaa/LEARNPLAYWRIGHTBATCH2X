// Calculate a simple weighted practice score.

// Rules:
// - Each passed item gives 2 points.
// - Each failed item subtracts 1 point.
// - Skipped items are 0 points.
// - Return the final number.

function calculateJsBasicsWeightedScore(passed, failed, skipped) {
  return (passed * 2) - failed;
}
calculateJsBasicsWeightedScore(1, 4, 3);