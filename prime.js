
function prime(number){
    let factors=0;
    for(i=1;i<=number;i++){
        if(number%i==0){
            factors++;
        }
    }
    if(factors==2){

        return true;
    }
    return false;
}

return false;
}
let answer = prime(13)
if(answer == true){

console.log("Prime");
}else{
console.log("Not prime");
}