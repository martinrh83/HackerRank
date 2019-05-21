function sockMerchant(n, ar){
  let sortedArray = ar.sort();
  let total = 0;
  for(i=0; i < n-1; i++){
    if(sortedArray[i] === sortedArray[i+1]){
      total ++;
      i += 1;
    }
  }
  return total;
}