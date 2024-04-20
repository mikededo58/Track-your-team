const newTeamFormHandler = async function (event) {
  event.preventDefault();

  const team_name = document.querySelector('input[name="team-name"]').value;
  const league_id = document.querySelector(
    'input[name="team-league-id"]'
  ).value;
  await fetch(`/api/team`, {
    method: 'POST',
    body: JSON.stringify({
      team_name: team_name,
      league_id: league_id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/');
};

document
  .querySelector('#new-team-form')
  .addEventListener('submit', newTeamFormHandler);
