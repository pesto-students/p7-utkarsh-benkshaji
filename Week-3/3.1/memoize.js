function memoize(fn){
  const cache= new Map();
  return function(...args){
      let [a,b] = args;
      if(!a){
          a=0;
      }
      if(!b){
          b=0;
      }
      const key = a+'$'+b;
      if(!cache.has(key)){
          console.log('New Parameters');
          cache.set(key,fn(...args));
      }
      return cache.get(key);
  }
}

function add(a=0,b=0){
  return a+b;
}

const memoizeAdd = memoize(add);

memoizeAdd(100,100);
memoizeAdd(100);
memoizeAdd(100,200);
memoizeAdd(100,100);