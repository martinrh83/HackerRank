let n = 8;
let s = 'UDDDUDUU';
function countValleys(n,s){
  let arrayM = s.split('');
  console.log(arrayM);
  let seaLevel = 0;
  let valleyVisited = 0;
  for(let i=0; i < n; i++){
    if(arrayM[i] === "D" && seaLevel === 0){
      valleyVisited++;
      seaLevel --;
    }else if(arrayM[i] === "D" && seaLevel !== 0){
      seaLevel--;
    }else if(arrayM[i] === "U"){
      seaLevel++;
    }
  }
  return valleyVisited;
}

console.log(countValleys(n,s));