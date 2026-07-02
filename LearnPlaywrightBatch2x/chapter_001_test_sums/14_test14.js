// Rules:
// - Keep the original task text after trimming.
// - Number items from 1.
// - Append " - TODO" to each item.
// - Skip blank values.

function buildJsBasicsChecklist(items) {
  let result = [];

  for (let item of items) {
    item = item.trim();

    if (item) {
      result.push((result.length + 1) + ". " + item + " - TODO");
    }
  }

  return result;
}
buildJsBasicsChecklist(["Install Node", "Create GitHub repo"]);