
const api = "https://striveschool-api.herokuapp.com/api/deezer/album/"
let album = null

async function getAlbum(id) {
    const response = await fetch(api + id)
    const data = await response.json()
    console.log(data)

    album = {
        id: data.id,
        title: data.title,
        cover: data.cover,
        coverXl: data.cover_xl,
        coverSmall: data.cover_small,
        tracks: data.tracks.data,
        releaseDate: data.release_date
    }
    songs = null
    album.tracks.map((track,i) => {
        songs += `<tr>
                    <th scope="row">${i+1}</th>
                    <td>${track.title}</td>
                    <td>${track.artist.name}</td>
                    <td>${track.duration}</td>
                </tr>`
    })
    document.getElementById("albumTable").classList.remove("d-none")
    document.getElementById("tracks").innerHTML = songs
   album = `<div class="card" style="width: 18rem;">
  <img src="${album.coverXl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${album.title}</h5>
  </div>
</div>`
document.getElementById("searchResults").innerHTML = album
    
}