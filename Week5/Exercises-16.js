function totalDigitRekursif(angka) {
  // you can only write your code here!
  var str = String(angka)
  if(str.length == 1){return angka}
  else{return Number(str[0]) + Number(totalDigitRekursif(str.slice(1, str.length)))}
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5