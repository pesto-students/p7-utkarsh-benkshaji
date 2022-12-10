function memoize(reducer) {
    var cache = {};
    return function() {
      var key = JSON.stringify(arguments);
      if (cache[key]) {
        return cache[key];
      } else {
        var val = reducer.apply(this, arguments);
        cache[key] = val;
        return val;
      }
    };
  }