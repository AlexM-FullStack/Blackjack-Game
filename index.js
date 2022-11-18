let startBtn = document.getElementById("start-btn")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector("#cards-el")
let newCard = document.getElementById("new-card")

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let renderGame =  ()=> {
    cardsEl.textContent = `Cards: ${firstCard}  ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

startBtn.addEventListener("click", renderGame)

newCard.addEventListener("click", ()=>{
    console.log("Drawing a new card from the deck!")
    let card = 10
    sum += card
    renderGame()
})



