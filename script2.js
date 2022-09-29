// let characters;
// let quotes;
// let episodes;
// let deaths;

let prev = document.querySelector(".prev");
let content = document.querySelector(".content");

async function storeQuotes() {
  let response = await axios("https://www.breakingbadapi.com/api/quotes");
  characters = [...response.data];
}

async function storeEpisodes() {
  let response = await axios("https://www.breakingbadapi.com/api/episodes");
  characters = [...response.data];
}

async function storeDeaths() {
  let response = await axios("https://www.breakingbadapi.com/api/deaths");
  characters = [...response.data];
}

async function getCharacters() {
  let response = await axios("https://www.breakingbadapi.com/api/characters");

  let characters = [...response.data];
  let i = 0;
  content.addEventListener("click", (e) => {
    if (e.target.classList.contains("prev")) {
      console.log("getting prev");
    } else if (e.target.classList.contains("next")) {
      console.log("getting next");
    }
  });
}

window.addEventListener("load", (event) => {
  getCharacters();
});
