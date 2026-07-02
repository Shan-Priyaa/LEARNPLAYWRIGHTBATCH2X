// Rules:
// - Trim each tag.
// - Lowercase each tag.
// - Remove blank values.
// - Keep first-seen order.


function createUniqueJsBasicsTags(tags) {
  let result = [];

  for (let tag of tags) {
    tag = tag.trim().toLowerCase();

    if (tag && !result.includes(tag)) {
      result.push(tag);
    }
  }

  return result;
}
createUniqueJsBasicsTags([" Smoke ", "smoke", "Regression"]);