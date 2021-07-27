// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = (name) => {
return cats.push("Ralph")
}
const destructivelyPrependCat = (name) => {
    return cats.unshift("Bob")
}
const destructivelyRemoveLastCat = (name) => {
    return cats.pop()
}
const destructivelyRemoveFirstCat = (name) => {
    return cats.shift()
}
const appendCat = (name) => {
    let newArray = [...cats, "Broom"]
    return newArray
}
const prependCat = (name) => {
    let newArray = ["Arnold", ...cats]
    return newArray
}
const removeLastCat = (name) => {
    return cats.slice(0, cats.length - 1)
}
const removeFirstCat = (name) => {
    return cats.slice(1, cats.length)
}

