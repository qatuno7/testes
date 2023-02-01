<script>
  const form = document.querySelector("form");
  const definitionDiv = document.querySelector("#definition");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const word = form.elements.word.value;

    fetch("dictionary.json")
      .then(response => response.json())
      .then(data => {
        const definition = data[word];
        definitionDiv.innerHTML = definition || "Word not found.";
      })
      .catch(error => {
        console.error("Error fetching dictionary data:", error);
        definitionDiv.innerHTML = "Error fetching dictionary data.";
      });
  });
</script>
