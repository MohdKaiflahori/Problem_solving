function strReverse(str){
    let reverse = "";
    for(let i = str.length ; i >=0; i--){
reverse+=str.charAt(i);
    }
    if(reverse===str){
    return console.log(true);
    }else{
        return console.log(false);
    }
}
strReverse("racecar")