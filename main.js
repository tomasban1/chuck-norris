const btnDOM = document.querySelector('button');
const p = document.querySelector('p');
const url = 'https://api.chucknorris.io/jokes/random';



btnDOM.addEventListener('click', getJoke);

function getJoke() {
    fetch(url)
        .then(res => res.json())
        .then(data => p.textContent = data.value);

}

