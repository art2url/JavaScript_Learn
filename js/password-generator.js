function randomChar(a) {
    let alphabet = a
    let word = ''
    let chars = 8
    while (word.length < chars) {
        word += alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return word
}
randomChar("0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz")