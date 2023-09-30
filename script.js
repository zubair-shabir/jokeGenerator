document.getElementById("jokeBtn").addEventListener('click' ,() => {
    GetJoke();
  })
  async function GetJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await response.json();
    document.getElementById('joke').innerText = joke.value;
}