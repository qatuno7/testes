const form = document.querySelector("form");
    const definitionDiv = document.querySelector("#definition");
    let entries;
    let wordToDefinition = {};
    let definitionToWord = {};

    fetch("dictionary.txt")
      .then(response => response.text())
      .then(data => {
        entries = data.split("\n");
        entries.forEach(entry => {
          const parts = entry.split(":");
          const word = parts[0];
          const definition = parts[1];
          wordToDefinition[word] = definition;
          definitionToWord[definition] = word;
        });
      })
      .catch(error => {
        console.error("Error fetching dictionary data:", error);
        definitionDiv.innerHTML = "Error fetching dictionary data.";
      });

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const query = form.elements.query.value;
      let result;

      if (wordToDefinition[query]) {
        result = wordToDefinition[query];
      } else if (definitionToWord[query]) {
        result = definitionToWord[query];
      } else {
        result = "Word or definition not found.";
      }

      definitionDiv.innerHTML = result;
    });
