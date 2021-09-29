//????
function remove(text) {
    let reverse = text.split('').reverse();
    for (let i = 0; i < reverse.length; i++) {
        if (reverse[i] === '!') {
            reverse.shift()
        }
    }
    return reverse.reverse().join('')
}
remove("!!fdfdfq1!!!!!!!!")