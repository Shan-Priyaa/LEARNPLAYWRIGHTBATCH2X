function filterSupportedJsBasicsTopics(topics)

  const aliases = {
    node: "node",
    runtime: "node",
    v8: "v8",
    npm: "npm"
  };

  let result = [];

for (let topic of topics)
{
    let key = String(topic).trim().toLowerCase();
    if (aliases[topic] && !result.includes(aliases[topic])
    {
      result.push(aliases[topic])
    }
  }
  return result;
}
filterSupportedJsBasicsTopics(["NODE", " v8 ", "unknown"]);

// Rules:
// - Trim and lowercase each item.
// - Allow known aliases from the chapter group.
// - Return canonical topic keys in first-seen order.
// - Skip unsupported values.