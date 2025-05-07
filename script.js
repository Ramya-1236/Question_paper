function handleCredentialResponse(response) {
    console.log("ID Token: " + response.credential);
    sessionStorage.setItem('google_token', response.credential);
    window.location.href = "home.html";
  }
  