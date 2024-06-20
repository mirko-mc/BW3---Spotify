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

  let albumDetails = `<div class="card" id="album-card">
                        <div class="card-img-container">
                            <a href="">
                                <img src=${albums.coverXl} class="card-img-top" alt="ALBUM IMG">
                            </a>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Album</p>
                            <h5 class="card-title">${albums.title}</h5>
                            <a href="./artist.html?id=${albums.idArtist}"">
                                <p class="card-text">${albums.artistName}</p>
                            </a>
                        </div>
                    </div>`;
  

  document.getElementById("album-container").innerHTML = albumDetails;
}
