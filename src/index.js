//TODO: #1 implementar api (getGames(), getGameById()). Mirar en la documentación de json-server
async function drawListGames() {
    let games = await getGames();
    document.getElementById('games')
        .appendChild(document.createElement('ul'))
        .setAttribute('id', 'games-list');
    var i = 0;
    for (i; i < games.length; i++) {
        document.getElementById('games-list')
            .appendChild(document.createElement('li')).innerHTML = generateGameSnippet(games[i]);
    }
}

async function drawGame(gameId) {
  let game = await getGameById(gameId);
  document.getElementById('game-name-title').innerHTML = game.name;
  // TODO: #5 breadcrumb???? Let's use jQuery!!
  document.getElementById('game-image').src = game.image;
  document.getElementById('game-image').alt = game.name;

  document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;
  document.getElementById('user-score').innerHTML = game.scores.userScore;

  document.getElementById('summary').innerHTML = game.summary;

  document.getElementById('platform').innerHTML = game.platform;
  document.getElementById('release-date').innerHTML = game.relaseDate;

}

// TODO: #2 Pedir ayuda para generateCommentSnippet
async function drawComments(gameId) {
  console.log(gameId)
  let comments = await getCommentsOfGame(gameId);
  document.getElementById('comments')
      .appendChild(document.createElement('ul'))
      .setAttribute('id', 'comments-list');
  var i = 0;
  for (i; i < comments.length; i++) {
      document.getElementById('comments-list')
          .appendChild(document.createElement('li')).innerHTML = generateCommentSnippet(comments[i]);
  }
}

// TODO: #4 Dar más información que una lista (imagen, nombre, primeros 100 caracteres de summary)
function generateGameSnippet(game) {
  return `<a href="/detail.html?id=${game.id}">${game.name}</a>`;
}
