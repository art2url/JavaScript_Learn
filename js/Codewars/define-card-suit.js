// You get any card as an argument. Your task 
// is to return a suit of this card.


function defineSuit(card) {
    if (card.charAt(1) == '♣' || card.charAt(2) == '♣') {
        return 'clubs'
    } else if (card.charAt(1) == '♠' || card.charAt(2) == '♠') {
        return 'spades'
    } else if (card.charAt(1) == '♦' || card.charAt(2) == '♦') {
        return 'diamonds'
    } else if (card.charAt(1) == '♥' || card.charAt(2) == '♥') {
        return 'hearts'
    }
}

defineSuit('10♣')