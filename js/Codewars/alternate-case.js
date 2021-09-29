function swapCase(text) {
    return text.split('').map(alternateCase).join('');
}

function alternateCase(char) {
    if (char.toLowerCase() === char) {
        return char.toUpperCase();
    }
    return char.toLowerCase();
}