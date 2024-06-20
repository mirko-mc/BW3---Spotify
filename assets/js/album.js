
const api = "https://striveschool-api.herokuapp.com/api/deezer/album/"
let album = null
const params = new URLSearchParams(window.location.search)

document.addEventListener("DOMContentLoaded", async () => {
  await asideArtist();
  await albumClick();
})