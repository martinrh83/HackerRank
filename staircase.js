//solution 1
function starcase1(){
  for (let j= n-1; j >= 0; j--){
    let empty = [];
    for (let i = 0; i < n; i++) {
      if (i < j) {
        empty.push(' '); 
      } else {
        empty.push('#');
      }
    }
    console.log(empty.join(''));    
  }
}

//solution 2
function staircase2(n) {
  const line = Array(n).fill(' ');
  for (let i = n-1; i >= 0; i--){
      line[i] = '#';
      console.log(line.join(''));  
  }
}