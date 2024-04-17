const newLeagueFormHandler = async function (event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="league-name"]').value;
  
    await fetch(`/api/league`, {
      method: 'POST',
      body: JSON.stringify({
        name,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-league-form')
    .addEventListener('submit', newLeagueFormHandler);