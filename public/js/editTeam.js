const teamId = document.querySelector('input[name="team-id"]').value;

const editFormHandler = async function (event) {
  event.preventDefault();

  // const name = document.querySelector('input[name="team-name"]').value;
  const games_won = document.querySelector('input[name="team-gamesWon"]').value;
  // const team_id = document.querySelector('input[name="team-ID"]').value;
  const games_played = document.querySelector(
    'input[name="team-gamesPlayed"]'
  ).value;

  await fetch(`/api/team/${teamId}`, {
    method: 'PUT',
    body: JSON.stringify({
      // team_name: name,
      games_won: games_won,
      games_played: games_played,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // document.location.replace('/');
};

// const deleteClickHandler = async function () {
//   await fetch(`/api/posts/${teamId}`, {
//     method: 'DELETE',
//   });

//   document.location.replace('/');
// };

document
  .querySelector('#edit-team-form')
  .addEventListener('submit', editFormHandler);
// document
//   .querySelector('#delete-btn')
//   .addEventListener('click', deleteClickHandler);
