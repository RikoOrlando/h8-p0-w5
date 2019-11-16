function kaliTerusRekursif(angka) {
  // you can only write your code here!
  
  var str = String(angka)
  var result = 1
  for(i=0; i<str.length; i++){
    result *= str[i]
  } 
  if(angka < 10){return angka}
  else{return kaliTerusRekursif(result)}
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6