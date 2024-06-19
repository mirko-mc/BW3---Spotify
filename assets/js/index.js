const URLSEARCH = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const URLARTIST = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const URLALBUM = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let searchs = null;
let artist = null;
let album = null;

document.addEventListener("DOMContentLoaded", () => {
  asideArtist();
  // albumCards();
});

/** aside => artist */
async function asideArtist() {

  await getSearch("a");
  console.log("ASIDEARTIST => album");
  console.table(album);
  console.log("ASIDEARTIST => artist");
  console.table(artist);
for (let i = 0; i < 15; i++) {
  const ALBUM = album[i];
  const ARTIST = artist[i];

  // let random = null;
  // const RANDOMHISTORY = [];
  // for (let i = 0; i < 13; i++) {
  //   do {
  //     random = parseInt(Math.random() * 300);
  //   } while (RANDOMHISTORY.includes(random));
  //   RANDOMHISTORY.push(random);
  //   if ((await getArtist(random)) === false) {
  //     console.log("ASIDEARTIST => ho saltato l'elemento perché non esiste");
  //     i--;
  //     continue;
  //   }
    document.getElementById("recent-artists-aside-list").innerHTML += `
    <li>
      <a href="./artist.html?id=${artist.id}">
      <img src="${artist.pictureSmall}" alt="${artist.artistName}">
      <div>
        <div>${artist.artistName}</div>
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
  // album = null;
  let random = null;
  const RANDOMHISTORY = [];
  for (let i = 0; i < 5; i++) {
    do {
      random = parseInt(Math.random() * 300);
    } while (RANDOMHISTORY.includes(random));
    RANDOMHISTORY.push(random);
    console.log(random);
    if ((await getAlbum(random)) === false) {
      console.log("ALBUMCARDS => ho saltato l'elemento perché non esiste");
      i--;
      continue;
    }
    document.getElementById("cardsContainer").innerHTML += `
  <div class="card"">
    <div class="card-img-container">
			<a href="./album.html/${album.idAlbum}"><img src="${album.coverMedium}" class="card-img-top" alt="ALBUM IMG"></a>
		</div>
		<div class="card-body">
			<a href="./album.html/${album.idAlbum}">
			  <h5 class="card-title">${album.title}</h5>
			</a>
			<a href="./album.html/${album.idArtist}">
			  <p class="card-text">${album.artistName}</p>
			</a>
		</div>
`;
  }
}
