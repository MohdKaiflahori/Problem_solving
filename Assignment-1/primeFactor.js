function primeFactors(n) {
    let i = 2;
    while(i<=n){
        if(n%i === 0) {
            n = n/i;
            console.log(i);
        } else {
            i++;
        }
    }
}
primeFactors(1440);