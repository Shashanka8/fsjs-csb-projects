const jokeDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", () => {
  jokeBtn.innerText = "Fetching joke...";

  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      const newJoke = data?.value;
      jokeDiv.innerHTML = newJoke;
      jokeBtn.innerText = "Get Another Joke";
    });
});
