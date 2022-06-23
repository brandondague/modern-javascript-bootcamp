let fahr = 32;

let celc = (fahr - 32) * 5 / 9;
console.log (`${parseFloat(celc).toFixed(2)}C`);

let kel = celc + 273.15;
console.log(`${parseFloat(kel).toFixed(2)}K`);