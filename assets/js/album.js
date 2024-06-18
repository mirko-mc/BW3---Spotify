
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
        releaseDate: data.release_date,
        name: data.artist.name
    }
    
    let songs = ""
    album.tracks.map((track, i) => {
        songs += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${track.title}</td>
                    <td>${track.artist.name}</td>
                    <td>${track.duration}</td>
                    <td><audio controls>
  <source src=${track.preview} type="audio/mp3">
</audio></td>
                </tr>`
                
    })

    document.getElementById("albumTable").classList.remove("d-none")
    document.getElementById("tracks").innerHTML = songs

    album = `<div class="card mb-3" style="width:100%;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${album.coverXl} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <p class="card-text"><small class="text-body-secondary">Album</small></p>
        <h1 class="card-title">${album.title}</h1>
        <span class="card-text"><small class="text-body-secondary">${album.name}</small></span>
        <span class="card-text"><small class="text-body-secondary">• ${album.releaseDate}</small></span>
        <span class="card-text"><small class="text-body-secondary">• ${album.tracks.length} brani</small></span>
        
      </div>
    </div>
  </div>
</div>`

    document.getElementById("searchResults").innerHTML = album

}