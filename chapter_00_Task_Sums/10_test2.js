function isValidJsBasicsIdentifier(name)
{
  const reservedWords = ["let", "const", "var", "class", "function", "return"];
  if (typeof name !== "string")
  {
    return false;
  }
  name = name.trim();
  if (name.length == 0)
  {
    return false;
  }
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
}
isValidJsBasicsIdentifier("let")