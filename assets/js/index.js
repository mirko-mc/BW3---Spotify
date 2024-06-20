document.addEventListener("DOMContentLoaded", async () => {
  await asideArtist();
  await albumCards();
});

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
    // const ARTIST = artists[i];
    if (ALBUM.id === albumCard.dataset.idalbum) {
      const ARTIST = await getArtist(artists[i]);
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
