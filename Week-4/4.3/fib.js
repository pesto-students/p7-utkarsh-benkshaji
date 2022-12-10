const fib={
    [Symbol.iterator](){
        let a = -1, b = 1,count = 0;
        const fibLimit = 7;
        return{
            next(){
                let c = a+b;
                a=b;
                b=c;
                return {value:c , done:++count>fibLimit}
            }
        }
    }
}

console.log('The Fibonacci series is :');

for(let fibNumber of fib){
        console.log(fibNumber)
}