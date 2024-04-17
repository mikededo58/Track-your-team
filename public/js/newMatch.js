const newMatchFormHandler = async function (event) {
    event.preventDefault();
  
    const date = document.querySelector('input[name="match-date"]').value;

    const homeTeam = document.querySelector('input[name="match-home-team-id"]').value;

    const awayTeam = document.querySelector('input[name="match-away-team-id"]').value;

    const winner = document.querySelector('input[name="match-winner"]').value;
  
    await fetch(`/api/league`, {
      method: 'POST',
      body: JSON.stringify({
        date,
        homeTeam,
        awayTeam,
        winner
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-match-form')
    .addEventListener('submit', newLeagueFormHandler);