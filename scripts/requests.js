let pokemons = [
    'charmander',
    'bulbasaur',
    'squirtle',
    'charizard',
    'ditto',
    'wigglytuff',
    'caterpie',
    'blastoise',
    'octillery',
]

pokemons.sort((a,b) => {
    if (a < b) {
        return -1
    } else {
        return false
    }
})

let PokeNow = pokemons[0]
let request = `https://pokeapi.co/api/v2/pokemon/${PokeNow}`

function PrincipalRequest() {
    clearCard()

    setTimeout(() => {
        fetch(request)
        .then(response => response.json())
        .then(data => {
            PokeName.innerHTML = data.name + ":"

            PokeIMG.src = `./assets/${data.name}.png`

            let habis = data.abilities.map(item => {
                return item.ability.name
            })
            
            for(let i = 0;i < habis.length; i++) {
                PokeHabi.innerHTML += `
                <li class="poke-ability">${habis[i]}</li>
                `
            }
            
        })
        .catch(err => {
            PokeName.innerHTML = `ERRO NA REQUISIÇÃO DOS DADOS...`
            let habiTitle = document.querySelector('.hability').style.display = "none"
            console.log(err)
        })

    }, 10)
}

function clearCard() {
    const PokeName = document.getElementsByClassName('poke-name')[0]
    const PokeIMG = document.getElementsByClassName('poke-img')[0]
    const PokeHabi = document.getElementsByClassName('poke-habi')[0]

    PokeName.innerHTML = ''
    PokeIMG.src = ''
    PokeHabi.innerHTML = ''
}