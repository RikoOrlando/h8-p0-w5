function sorting(arrNumber) {
  // code di sini
  for(i=0; i<arrNumber.length; i++){
    for(j=0; j<arrNumber.length; j++){
      if(arrNumber[j] > arrNumber[j+1]){
        var smt = arrNumber[j];
        arrNumber[j] = arrNumber[j+1];
        arrNumber[j+1] = smt;
      }
    }
  } return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  if(arrNumber == false){return arrNumber}
  var jumlah = 1
  for(j=0; j<arrNumber.length-1; j++){
    if(arrNumber[j] == arrNumber[arrNumber.length-1]){
      jumlah +=1
    }
  }
  var result = 'angka yang paling besar adalah ' + arrNumber[arrNumber.length-1] + ' dan jumlah kemunculannya sebanyak ' + jumlah + ' kali'
  return result
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''



