const URLSEARCH = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const URLARTIST = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const URLALBUM = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let searchs = null;
let artists = null;
let albums = null;

document.addEventListener("DOMContentLoaded", () => {
  asideArtist();
});

/** aside => artist */
async function asideArtist() {
  await getSearch("a");
  albumCards();
  // console.log("ASIDEARTIST => album");
  // console.table(album);
  // console.log("ASIDEARTIST => artist");
  // console.table(artist);
  for (let i = 0; i < 16; i++) {
    const ARTIST = artists[i];
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

async function albumCards() {
  let y = 0;
  for (let x = 0; x < 4; x++) {
    const CARDSCONTAINER = document.getElementById(`cardsContainer${x + 1}`);
    for (y; y < 16; y++) {
      const ALBUM = albums[y];
      const ARTIST = artists[y];
      CARDSCONTAINER.innerHTML += `
  <div id="albumCard${y}" data-idalbum="${ALBUM.id}" data-idartist="${ARTIST.id}" class="card" onclick="albumClick(this)">
    <div class="card-img-container">
			<a href="#"><img src="${ALBUM.coverMedium}" class="card-img-top" alt="ALBUM IMG"></a>
		</div>
		<div class="card-body">
			<a href="./album.html?id=${ALBUM.id}">
			  <h5 class="card-title">${ALBUM.title}</h5>
			</a>
			<a href="./artist.html?id=${ARTIST.id}">
			  <p class="card-text">${ARTIST.name}</p>
			</a>
		</div>
`;
    }
  }
}

async function albumClick(albumCard) {
  for (let i = 0; i < albums.length; i++) {
    const ALBUM = albums[i];
    let ARTIST = null;
    await getArtist(ALBUM.idArtist).then((ARTIST) => {
      ARTIST = artists[i];
    });
    if (ALBUM.id === albumCard.dataset.idalbum) {
      collapsedTitle(ALBUM.title);
      songCard(
        ALBUM.id,
        ARTIST.id,
        ALBUM.title,
        ARTIST.name,
        ALBUM.coverMedium
      );
      artistCard(
        ALBUM.id,
        ARTIST.pictureMedium,
        ARTIST.name,
        ALBUM.id,
        ARTIST.nFan
      );
      break;
    }
  }
}

/** collapse => album */
async function collapsedTitle(title) {
  document.getElementById("collapsed-title").innerHTML = `
  <h2>${title}</h2>
  `;
}

function songCard(idAlbum, idArtist, albumTitle, artistName, cover) {
  document.getElementById("song-card").innerHTML = `
  <div class="card-img-container">
      <a href="./album.html?id=${idAlbum}"><img src="${cover}" class="card-img-top" alt="ALBUM IMG"></a>
    </div>
    <div class="card-body">
      <a href="./album.html?id=${idAlbum}">
        <h5 class="card-title">${albumTitle}</h5>
      </a>
      <a href="./artist.html?id=${idArtist}">
        <p class="card-text">${artistName}</p>
      </a>
      <div class="card-button-overlay">
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
  `;
}

function artistCard(idArtist, picture, artistName, idAlbum, artistFan) {
  document.getElementById("artist-card").innerHTML = `
  <div class="card-img-container">
      <a href="./artist.html?=${idArtist}"><img src="${picture}" class="card-img-top" alt="ALBUM IMG"></a>
    </div>
    <div class="card-body">
      <a href="./artist.html?=${idArtist}">
        <h5 class="card-title">${artistName}</h5>
      </a>
      <a href="./album.html?id=${idAlbum}">
        <p class="card-text">${artistName}</p>
        <p class="card-text">${artistFan} listeners</p>
      </a>
      <div class="card-button-overlay">
        <button class="btn">Follow</button>
      </div>
    </div>
  `;
}

/** collapse => informazioni sull'artista */
async function collapseArtistInfo() {}
