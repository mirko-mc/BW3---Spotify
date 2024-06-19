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

async function getArtist(id) {
  const RESPONSE = await fetch(URLARTIST + id);
  if (RESPONSE.status === 500) return false;
  //   // console.log("GETARTIST => response\n", response);
  const data = await RESPONSE.json();
  // console.log("GETARTIST => data\n", data);
  artist = {
    id: data["id"],
    artistName: data["name"],
    pictureSmall: data["picture_small"],
    pictureMedium: data["picture_medium"],
    pictureBig: data["picture_big"],
    pictureXl: data["picture_xl"],
  };
  // console.log("GETARTIST => artist\n", artist);
  return true;
}

/** fetch per la ricerca dell'artista passato come parametro in ingresso
 *  prendo i dati ricevuti e mappo in un array di oggetti solo quelli che mi servono
 */
async function getSearch(query) {
  const response = await fetch(URLSEARCH + query);
  if (!response.ok) {
    throw new Error("OOPS.....ERROR");
  } else {
    // console.log("GETSEARCH => response\n", response);
  }
  const data = await response.json();
  // console.log("GETSEARCH => data\n", data.data);
  searchs = data.data.map((ALBUM) => ({
    idAlbum: ALBUM.album.id,
    cover: ALBUM.album.cover,
    coverSmall: ALBUM.album.cover_small,
    coverMedium: ALBUM.album.cover_medium,
    coverBig: ALBUM.album.cover_big,
    coverXl: ALBUM.album.cover_xl,
    title: ALBUM.title_short,
    artist: ALBUM.artist.name,
    idArtist: ALBUM.artist.id,
    pictureArtist: ALBUM.artist.picture_small,
    duration: ALBUM.duration,
  }));
  // console.log("GETSEARCH => search\n", searchs);
}

async function getAlbum(id) {
  const RESPONSE = await fetch(URLALBUM + id);
  if (RESPONSE.status === 500) return false;
  //   // console.log("GETARTIST => response\n", response);
  const data = await RESPONSE.json();
  album = {
    idAlbum: data["id"],
    title: data["title"],
    coverSmall: data["picture_small"],
    coverMedium: data["picture_medium"],
    coverBig: data["picture_big"],
    coverXl: data["picture_xl"],
    artistName: data["artist"]["name"],
    idArtist: data["artist"]["id"],
  };
  // console.log("GETARTIST => artist\n", artist);
  return true;
}

/** aside => artist */
async function asideArtist() {
  artist = null;
  let random = null;
  const RANDOMHISTORY = [];
  for (let i = 0; i < 13; i++) {
    do {
      random = parseInt(Math.random() * 300);
    } while (RANDOMHISTORY.includes(random));
    RANDOMHISTORY.push(random);
    if ((await getArtist(random)) === false) {
      console.log("ASIDEARTIST => ho saltato l'elemento perché non esiste");
      i--;
      continue;
    }
    document.getElementById("recent-artists-aside-list").innerHTML += `
    <li>
      <a href="./artist.html/${artist.id}">
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
