const newMatchFormHandler = async function (event) {
  event.preventDefault();

  const date = document.querySelector('input[name="match-date"]').value;

  const home_team_name = document.querySelector(
    'input[name="match-home-team-name"]'
  ).value;

  const away_team_name = document.querySelector(
    'input[name="match-away-team-name"]'
  ).value;

  const home_team_id = document.querySelector(
    'input[name="match-away-team-id"]'
  ).value;

  const away_team_id = document.querySelector(
    'input[name="match-away-team-id"]'
  ).value;

  const winner = document.querySelector('input[name="match-winner"]').value;

  await fetch(`/api/match`, {
    method: 'POST',
    body: JSON.stringify({
      match_date: date,
      home_team_id: home_team_id,
      away_team_id: away_team_id,
      home_team_name: home_team_name,
      away_team_name: away_team_name,
      winner: winner,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  // document.location.replace('/');
};

document
  .querySelector('#new-match-form')
  .addEventListener('submit', newMatchFormHandler);
