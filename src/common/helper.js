const _debounce = (func, delay = 0) => {
  let timer = null;
  return function () {
    const ctx = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(ctx, args);
    }, delay);
  };
};

export { _debounce };
