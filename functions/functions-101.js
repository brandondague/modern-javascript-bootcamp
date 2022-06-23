function convertTemp (temp) {
    let convert = parseFloat((temp - 32) * 5 / 9).toFixed(2)
    return convert
}

console.log(convertTemp(72))