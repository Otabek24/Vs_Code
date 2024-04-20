const array = ['green', 'yellow', 'pink', 'purple', 'red', 'indigo', 'aqua', 'brown', 'blue', 'black', 'orange', 'grey', 'cyan']

function random() {
    let i =  Math.floor(Math.random()*array.length)
    return array[i]
}

const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
}

cards.forEach(card => {
    card.addEventListener("click",() => {
        cards.forEach(item => {
            card.style.background = random()
        });
    })
})