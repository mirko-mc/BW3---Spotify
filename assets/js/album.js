const URLALBUM = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let albums = null;

const params = new URLSearchParams(window.location.search);
console.log(window.location.search);

const id = params.get("id");
getAlbum(id);

async function getAlbum(id) {
  const RESPONSE = await fetch(URLALBUM + id);
  if (RESPONSE.status === 500) return false;
  // console.log("GETARTIST => response\n", RESPONSE);
  const data = await RESPONSE.json();

  console.log("GETARTIST => data\n", data);

  albums = {
    idAlbum: data["id"],
    title: data["title"],
    coverSmall: data["cover_small"],
    coverMedium: data["cover_medium"],
    coverBig: data["cover_big"],
    coverXl: data["cover_xl"],
    artistName: data["artist"]["name"],
    idArtist: data["artist"]["id"],
    tracks: data["tracks"]["data"],
    release_date: data["release_date"]
  };

  let songs = "";
  albums.tracks.map((track, i) => {
    songs += `<tr>
                <th scope="row">${i + 1}</th>
                <td>${track.title}</td>
                <td>${albums.artistName}</td>
                <td><audio controls>
                  <source src=${track.preview} type="audio/mp3">
                </audio></td>
              </tr>`;
  });

  
  document.getElementById("tracks").innerHTML = songs;

  let albumDetails = `<div class="card mb-3" style="width:100%;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${albums.coverXl} class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text"><small class="text-body-secondary">Album</small></p>
          <h1 class="card-title">${albums.title}</h1>
          <span class="card-text"><small class="text-body-secondary">${albums.artistName}</small></span>
          <span class="card-text"><small class="text-body-secondary">• ${albums.release_date}</small></span>
          <span class="card-text"><small class="text-body-secondary">• ${albums.tracks.length} tracks</small></span>
        </div>
      </div>
    </div>
  </div>`;

  document.getElementById("album-container").innerHTML = albumDetails;
}
