const teamId = document.querySelector('input[name="team-id"]').value;

const editFormHandler = async function (event) {
  event.preventDefault();

  const name = document.querySelector('input[name="team-name"]').value;
  const gamesWon = document.querySelector('input[name="team-gamesWon"]').value;

  const gamesPlayed = document.querySelector('input[name="team-gamesPlayed"]').value;

  await fetch(`/api/tea,=m/${teamId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      gamesWon,
      gamesPlayed,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
  await fetch(`/api/posts/${teamId}`, {
    method: 'DELETE',
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-team-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
