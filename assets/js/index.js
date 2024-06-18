const ENDPOINT = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
let searchs = null;
async function getSearch(query) {
  const response = await fetch(ENDPOINT + query);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  } else {
    console.log("GETSEARCH => response\n", response);
  }
  const data = await response.json();
  console.log("GETSEARCH => data\n", data.data);
  searchs = data.data.map((ALBUM) => ({
    idAlbum: ALBUM.album.id,
    cover: ALBUM.album.cover_small,
    title: ALBUM.title_short,
    artist: ALBUM.artist.name,
    idArtist: ALBUM.artist.id,
    pictureArtist: ALBUM.artist.picture_small,
    duration: ALBUM.duration,
  }));
  console.log("GETSEARCH => search\n", searchs);
}

async function leftAsideAlbum() {
  await getSearch("queen");
  const LEFTASIDE = document.getElementById("leftAside");
  for (const SEARCH of searchs) {
    LEFTASIDE.innerHTML += `
            <img src="${SEARCH.cover}" alt="">
            <h6>${SEARCH.title}</h6>
            <p>${SEARCH.artist}</p>
            `;
  }
}
