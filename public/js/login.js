const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document
    .querySelector('#username-input-login')
    .value.trim();
  const passwordEl = document
    .querySelector('#password-input-login')
    .value.trim();

  if (usernameEl && passwordEl) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl,
        password: passwordEl,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
