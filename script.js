

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const getGrap = async() => {
    const APIEndpoint = 'https://icanhazdadjoke.com/';
    try {
        const result = await fetch(APIEndpoint, { method: "GET", headers: myHeaders});
        let res = await result.json();
        const grap = document.createElement('li');
        grap.innerHTML = res.joke;
        document.querySelector('.inhoud').appendChild(grap)
    } catch (error) {
        log(error);
    }
}

const getQuote = async() => {
    const APIEndpoint = 'https://www.tronalddump.io/random/quote';
    try {
        const result = await fetch(APIEndpoint, { method: "GET" });
        let res = await result.json();
        const quote = document.createElement('li');
        quote.innerHTML = res.value;
        document.querySelector('.inhoud').appendChild(quote)
    } catch (error) {
        log(error);
    }
}

const randomNumber = () => Math.floor(Math.random() * 100);

const getPokemon = async() => {
    const APIEndpoint = 'https://pokeapi.co/api/v2/pokemon/' + randomNumber() + '/';
    try {
        const result = await fetch(APIEndpoint, { method: "GET" });
        let res = await result.json();
        const image = document.createElement('img');
        image.src = res.sprites.front_default;
        document.querySelector('.inhoud').appendChild(image)
    } catch (error) {
        log(error);
    }
}

const emptyInhoud = () =>
(document.querySelector(".inhoud").innerHTML = "");

document.querySelectorAll("nav input").forEach(input =>
    input.addEventListener("click", () => {
      //emptyResultList();
      emptyInhoud();
    })
  );

const log = (item) => console.log(item);

document
.querySelector(".cbutton")
.addEventListener("click", getGrap);