CLONE DI SPOTIFY
L'obiettivo di questa build week è creare una copia dell'applicazione Spotify, in aspetto e - parzialmente - in funzionalità.
Lo scopo è ricreare l'app il più fedelmente possibile. Per questo vi sconsigliamo di partire dal template che avete usato nei compiti.

IMPOSTAZIONE DEL LAVORO
Lavorerete in team, cominciate quindi con iL suddividervi i task in base agli obiettivi giornalieri da raggiungere.
Le pagine che dovrete creare sono:
    - Homepage
    - Pagina artista
    - Pagina album
Troverai allegati tutti mockup.

API - HOMEPAGE
Sulla homepage, mostrate una serie di album a vostra scelta (rispettando lo stile e l'UI) usando questo endpoint:
Endpoint: https://striveschool-api.herokuapp.com/api/deezer/search?q={query}
Example: https://striveschool-api.herokuapp.com/api/deezer/search?q=queen
Potete ovviamente cambiare "queen" in qualsiasi altra cosa voi vogliate mostrare.

API - ALBUM PAGE
Quando l'utente clicca su un album, dovrebbe essere trasportato alla pagina corrispondente.
ATTENZIONE! NON DOVETE CREARE UNA PAGINA PER OGNI ALBUMI!!!
Create UNA pagina (album.html), e popolatela dinamicamente tramite l'id dell'album su cui avete cliccato.
SUGGERIMENTO: URLSearchParams
Endpoint: https://striveschool-api.herokuapp.com/api/deezer/album/{id}
Example: https://striveschool-api.herokuapp.com/api/deezer/album/75621062

API - ARTIST
Quando l'utente clicca sul nome di un artista, dovrebbe essere trasportato alla pagina corrispondente.
ATTENZIONE! NON DOVETE CREARE UNA PAGINA PER OGNI ARTISTA!!!
Create UNA pagina (album.html), e popolatela dinamicamente tramite l'id dell'album su cui avete cliccato.
SUGGERIMENTO: URLSearchParams
Endpoint: https://striiveschool-api.herokuapp.com/api/deezer/artist/{id}
Example: https://striveschool-api.herokuapp.com/api/deezer/artist/412