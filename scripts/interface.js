const NextPokeBTN = document.querySelector('.next')
const PreviousPokeBTN = document.querySelector('.before')
const PokeName = document.getElementsByClassName('poke-name')[0]
const PokeIMG = document.getElementsByClassName('poke-img')[0]
const PokeHabi = document.getElementsByClassName('poke-habi')[0]
let cont = 0

function NextPoke() {
    clearCard()
    
    if (cont == pokemons.length - 1) {
        cont = 0

        PokeNow = pokemons[cont]
        request = `https://pokeapi.co/api/v2/pokemon/${PokeNow}`
        PrincipalRequest()
    } else {
        cont ++

        PokeNow = pokemons[cont]
        request = `https://pokeapi.co/api/v2/pokemon/${PokeNow}`
        PrincipalRequest()
    }
}

function PreviousPoke() {
    clearCard()

    if (cont == 0) {
        cont = pokemons.length - 1

        PokeNow = pokemons[cont]
        request = `https://pokeapi.co/api/v2/pokemon/${PokeNow}`
        PrincipalRequest()
    } else {
        cont --

        PokeNow = pokemons[cont]
        request = `https://pokeapi.co/api/v2/pokemon/${PokeNow}`
        PrincipalRequest()
    }
}

NextPokeBTN.addEventListener('click', NextPoke)
PreviousPokeBTN.addEventListener('click', PreviousPoke)
document.addEventListener('DOMContentLoaded', PrincipalRequest)