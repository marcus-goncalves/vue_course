let Pokemons = {
    amount() {

    },

    say(str) {
        console.log('Your Pokedeck says: ', str)
    }
}

function howsMyCollection() {
    const size = Pokemons.amount()

    if (size === undefined) {
        return Pokemons.say('Ooops, not sure how many you got.')
    }
    if (size < 10) {
        return Pokemons.say('You only have a few, go for more pokemons.')
    }
    if (size < 50) {
        return Pokemons.say('You almost there. Keep going')
    }
    return Pokemons.say('You are a trully poke player!')
    
}

const originalAmount = Pokemons.amount

function stubAmount(amount) {
    Pokemons.amount = () => amount  
}

function havePokemons (amount) {
    stubAmount(amount)
    howsMyCollection()
}

havePokemons(5)
havePokemons(10)
havePokemons(100)