let str="aman"
function reverse(string){
let bag="";
for(i=string.length-1;i>=0;i--){
    bag+=string[i];
    }
    return bag;
}

let rev_str=reverse("aman");
if(str==rev_str){
    console.log("palindrome");
}else{
    console.log("NA");
}