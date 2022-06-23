function getTip (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = getTip(50, .5)

console.log(tip)