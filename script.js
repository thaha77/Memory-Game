const cards = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍓', '🍓'];
cards.sort(() => Math.random() - 0.5);

const board = document.getElementById('gameBord');
let flippedCards = [];

cards.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;
    card.addEventListener('click', () => {
        card.textContent = symbol;
        card.classList.add('flipped');
        flippedCards.push(card);
        
        if (flippedCards.length === 2) {
            checkMatch();
        }
    });
    board.appendChild(card);
});

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.textContent = '';
            card2.textContent = '';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}