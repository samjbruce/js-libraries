<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="autoComplete_wrapper">
      <input
        id="autoComplete"
        type="search"
        dir="ltr"
        spellcheck="false"
        autocorrect="off"
        autocomplete="off"
        autocapitalize="off"
      />
    </div>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {
    var array = ["Hello", "Hello World"];
    const autoCompleteJS = new autoComplete({
      selector: "#autoComplete",
      placeHolder: "Search for Food...",
      data: {
        src: array,
        cache: true,
      },
      resultsList: {
        element: (list, data) => {
          if (!data.results.length) {
            // Create "No Results" message element
            const message = document.createElement("div");
            // Add class to the created element
            message.setAttribute("class", "no_result");
            // Add message text content
            message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
            // Append message element to the results list
            list.prepend(message);
          }
        },
        noResults: true,
      },
      resultItem: {
        highlight: true,
      },
      events: {
        input: {
          selection: (event) => {
            const selection = event.detail.selection.value;
            autoCompleteJS.input.value = selection;
          },
        },
      },
    });
  },
  methods: {},
};
</script>
