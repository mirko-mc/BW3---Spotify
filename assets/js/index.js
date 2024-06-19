const URLSEARCH = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const URLARTIST = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const URLALBUM = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let searchs = null;
let artist = null;
let album = null;

document.addEventListener("DOMContentLoaded", () => {
  asideArtist();
});

/** aside => artist */
async function asideArtist() {
  await getSearch("a");
  albumCards();
  console.log("ASIDEARTIST => album");
  console.table(album);
  console.log("ASIDEARTIST => artist");
  console.table(artist);
  for (let i = 0; i < 16; i++) {
    const ARTIST = artist[i];
    document.getElementById("recent-artists-aside-list").innerHTML += `
    <li>
      <a href="./artist.html?id=${ARTIST.id}">
      <img src="${ARTIST.pictureSmall}" alt="${ARTIST.name}">
      <div>
        <div>${ARTIST.name}</div>
        <div>Artist</div>
      </div>
      </a>
    </li>
    `;
  }
}

/** collapse => album */
async function collapseAlbum() {
  await getSearch("queen");
  const RANDOM = parseInt(Math.random() * searchs.length);
  const RIGHTASIDE = document.getElementById("rightAside");
  RIGHTASIDE.innerHTML += `
              <img src="${searchs[RANDOM].coverBig}" alt="">
              <h6>${searchs[RANDOM].title}</h6>
              <p>${searchs[RANDOM].artist}</p>
              <span class="material-symbols-outlined">check_circle</span>
              `;
}

/** collapse => informazioni sull'artista */
async function collapseArtistInfo() {}

async function albumCards() {
  let y = 0;
  for (let x = 0; x < 4; x++) {
    const CARDSCONTAINER = document.getElementById(`cardsContainer${x + 1}`);
    for (y; y < 16; y++) {
      const ALBUM = album[y];
      const ARTIST = artist[y];
      CARDSCONTAINER.innerHTML += `
  <div class="card"">
    <div class="card-img-container">
			<a href="./album.html/${ALBUM.id}"><img src="${ALBUM.coverMedium}" class="card-img-top" alt="ALBUM IMG"></a>
		</div>
		<div class="card-body">
			<a href="./album.html?id=${ALBUM.id}">
			  <h5 class="card-title">${ALBUM.title}</h5>
			</a>
			<a href="./album.html?id=${ARTIST.id}">
			  <p class="card-text">${ARTIST.name}</p>
			</a>
		</div>
`;
    }
  }
}
