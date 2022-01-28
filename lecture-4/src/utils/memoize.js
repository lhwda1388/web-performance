const memoize = (fn, key) => {
  const cache = {};

  return (...args) => {
    if (args.length !== 1) return fn(...args);

    let cacheKey = args;

    if (typeof args === 'object') cacheKey = args[0][key];

    if (cache.hasOwnProperty(cacheKey)) {
      return cache[cacheKey];
    }
    const result = fn(...args);
    cache[cacheKey] = result;
    return result;
  };
};

export default memoize;
