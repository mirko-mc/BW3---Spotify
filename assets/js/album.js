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

    console.log(album)
}