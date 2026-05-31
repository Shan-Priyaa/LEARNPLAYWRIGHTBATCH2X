function normalizeJsBasicsLabel(label) {
  let text = "Hello I Am Learning ";
  text = text.trim();
  text = text.toLocaleLowerCase();
  text = text.replaceAll(" ", "-");
  let result = "jsbasics" +"-"+ text;
  return(result)
console.log(result);
}
console.log(normalizeJsBasicsLabel());