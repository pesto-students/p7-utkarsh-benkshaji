function createIncrement() {
    let count = 0;

    function increment () {
      count++;
    }

    let message = `Count is ${count}`;

    function log() {
      console.log(message);
    }

    return [increment, log];
  }

  const [increment, log] = createIncrement();

  increment(); // These function calls increases count three times
  increment();
  increment();
  log(); // log functions doesn't print the updated count . Since we are initializing message at the time of createIncrement function call. Message doesn't get updated at the time of increment function call. Hence we get initial value of count;