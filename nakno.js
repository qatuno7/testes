<script>
  const dictionary = {
    "hello": "A greeting or expression of goodwill.",
    "world": "The earth, together with all of its countries, peoples, and natural features.",
    "computer": "An electronic device that can perform a range of tasks, including storing and processing data, and serving as a platform for running software applications."
  };

  const form = document.querySelector("form");
  const definitionDiv = document.querySelector("#definition");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const word = form.elements.word.value;
    definitionDiv.innerHTML = dictionary[word] || "Word not found.";
  });
</script>
