// let characters;
// let quotes;
// let episodes;
// let deaths;

let prev = document.querySelector(".prev");
let content = document.querySelector(".content");
let charImg = document.querySelector(".char-img");

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
    if (e.target.classList.contains("prev") && i > 0) {
      i--;
      charImg.src = characters[i].img;
    } else if (e.target.classList.contains("next")) {
      i++;
      charImg.src = characters[i].img;
    }
  });
}

window.addEventListener("load", (event) => {
  getCharacters();
});
