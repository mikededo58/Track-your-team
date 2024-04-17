const newTeamFormHandler = async function (event) {
    event.preventDefault();
  
    const teamName = document.querySelector('input[name="team-name"]').value;
    const leagueId = document.querySelector('input[name="team-league-id"]').value;

  
    await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        teamName,
        leagueId
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-team-form')
    .addEventListener('submit', newTeamFormHandler);