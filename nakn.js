const form = document.querySelector("form");
const definitionDiv = document.querySelector("#definition");
let entries;

fetch("dictionary.txt")
  .then(response => response.text())
  .then(data => {
    entries = data.split("\n");
    entries = entries.reduce((dictionary, entry) => {
      const parts = entry.split(":");
      const word = parts[0];
      const definition = parts[1];
      dictionary[word] = definition;
      return dictionary;
    }, {});
  })
  .catch(error => {
    console.error("Error fetching dictionary data:", error);
    definitionDiv.innerHTML = "Error fetching dictionary data.";
  });

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const word = form.elements.word.value;
  const definition = entries[word];

  definitionDiv.innerHTML = definition || "Word not found.";
});
