const cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
} 
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    let newCatArray = [...cats]
    newCatArray.push(name)
    return newCatArray
}
function prependCat(name) {
    let newCatArray = [...cats]
    newCatArray.unshift(name)
    return newCatArray
}
function removeLastCat() {
    let newCatArray = [...cats]
    newCatArray.pop()
    return newCatArray
}
function removeFirstCat() {
    let newCatArray = [...cats]
    newCatArray.shift()
    return newCatArray
}







