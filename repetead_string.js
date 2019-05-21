let s = 'asasdaaa';
let n = 1000;
console.log(2)
function repeat(n,s){
  let repeticiones = Math.floor(n / s.length);
  let resto = n % s.length;
  let count = 0;
  s.split('').forEach(el=>{
    if(el === 'a'){
      count++;
    }
  });
  //let count = (s.split("a").length - 1) * repeticiones;
 
  let total = count * repeticiones;
  for(let i=0; i< resto; i++){
    if(s.charAt(i) === 'a'){
      total ++;
    }
  }
  return total;
}

var a = repeat(n,s);
console.log(a);