function changeVocals (str) {
  //code di sini
  var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var tmbh = 1 //untuk mengatur berapa banyak penambahahan index pada huruf vokal
  var hasil = ''
  for(i=0; i<str.length; i++){
    if(
      str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || 
      str[i] === 'o' || str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || 
      str[i] === 'E' || str[i] === 'O') {
        var posisi = alfabet.indexOf(str[i]);
        if(posisi>=0 && posisi<= 25){
          var smt1 = tmbh%26
          var smt2 = (posisi+smt1)%26
          hasil += alfabet[smt2]
        }
        else if(posisi>=26 && posisi<= 51){
          var smt3 = posisi-26
          var smt4 = tmbh%26
          var smt5 = 26 + ((smt3+smt4)%26)
          hasil += alfabet[smt5]
        }
      }
      else{hasil+=str[i]}
  } return hasil
}

function reverseWord (str) {
  //code di sini
  var result = ''
  for(j=str.length-1; j>=0; j--){
    result += str[j]
  }return result
}

function setLowerUpperCase (str) {
  //code di sini
  var hasil = ''
  for(k=0; k < str.length; k++){
    if(str[k] === str[k].toUpperCase()){
      hasil += str[k].toLowerCase()
    }
    else if(str[k] === str[k].toLowerCase()){
      hasil += str[k].toUpperCase()
    }
  } return hasil
}

function removeSpaces (str) {
  //code di sini
  var result = '';
  for(l=0; l<str.length; l++){
    if(str[l] != ' '){
      result+=str[l]
    }
  } return result
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5) {return 'Minimal karakter yang diinputkan adalah 5 karakter'}
  return changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

