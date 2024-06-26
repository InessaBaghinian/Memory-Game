

const cards = document.querySelector(".cards");

let hasFlippedCard= false;
let lockboard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockboard) return;
    if (this === firstCard) return;
    this.classList.add("flip");

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    
    checkForMatch();
}

    function checkForMatch() {
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isMatch ? disableCards(): unflipCards();
    }
    
    function disableCards() {
        firstCard.removeEventListner("click", flipCard);
        secondCard.removeEventListner("click", flipCard);
   }

   resetBoard()

   function unflipCards () {
    lockboard = true;
    setTimeout (() => {
        firstCard.classList.remove(".flip");
        secondCard.classList.remove("flip");
        resetBoard()
    }, 1500);
   }
   
   function resetBoard() {
    [hasFlippedCard,lockboard] = [false, false];
    [firstCard, secondCard] = [null, null];
   }

   function shuffle() {
    cards.forEach(card => {
        let ramdomPos =Math.floor(Math.random()* 12);
        card.style.order = ramdomPos;
    });
   }

   if (this === firstCard) return;
   function resetBoard(){
    [hasFlippedCard, lockboard] = [false, false];
    [firstCard, secondCard] = [null, null];
   }

    
    cards.forEach(card => card.addEventListener("click", flipCard));