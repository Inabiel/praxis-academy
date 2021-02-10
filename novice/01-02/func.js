function fizzbuzz(start,end){
    for(i = start; i<= end; i++){
        if(i%3 == 0 && i % 5 == 0){
            console.log(`Number ${i} Fizzbuzz`);
        }
        else if(i % 3 == 0){
            console.log(`Number ${i} fizz`);
        }
        else if(i % 5 == 0){
            console.log(`Number ${i} Buzz`);
        }
    }
}

a = fizzbuzz(2,200)

function min(a,b){
    if(a < b){
    return a 
   }
 else{
      return b 
 }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function countChar(string, word){
    jml = 0
    for (let i of string){
        if(i == word){
            jml += 1;
        }
    }
    return jml
}

console.log(countChar("kakkerlak", "k"));

//Spread Operator
function jml(...huruf){
    return huruf.length
}

console.log(jml('asdsa','dsadsa','dsadsaad'))